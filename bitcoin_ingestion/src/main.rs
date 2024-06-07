use reqwest::blocking::Client;
use serde_json::Value;
use std::time::Duration;
use postgres::{Client as PgClient, NoTls};

fn main() {
    let client = Client::new();
    // Connect to the PostgreSQL database using the specified parameters
    let mut pg_client = PgClient::connect("host=localhost user=postgres dbname=bitcoin_explorer port=5430", NoTls).unwrap();

    loop {
        // Make a GET request to the BlockCypher API with a 10-second timeout.
        let res = client.get("https://api.blockcypher.com/v1/btc/main")
            .timeout(Duration::from_secs(10))
            .send();

        match res {
            Ok(response) => {
                match response.json::<Value>() {
                    Ok(json) => {
                        println!("JSON Response: {:?}", json); // Log the JSON response.
                        // Extract the block_height from the JSON response if it's an integer.
                        if let Some(block_height) = json["height"].as_i64() {
                            println!("Fetched block height: {}", block_height);
                            // Insert the block_height into the database, ignoring duplicates.
                            pg_client.execute(
                                "INSERT INTO block_data (block_height) VALUES ($1) ON CONFLICT (block_height) DO NOTHING",
                                &[&block_height]
                            ).unwrap();
                            println!("Inserted block height: {}", block_height);
                        } else {
                            println!("Error: 'height' field is missing or not an integer");
                        }
                    },
                    Err(e) => println!("Error parsing JSON: {:?}", e),
                }
            },
            Err(e) => println!("Error fetching data: {:?}", e),
        }

        std::thread::sleep(Duration::from_secs(60)); // Sleep for 60 seconds before the next API call.
    }
}
