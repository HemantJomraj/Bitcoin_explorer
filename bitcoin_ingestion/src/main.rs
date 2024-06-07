use reqwest::blocking::Client;
use serde_json::Value;
use std::time::Duration;
use postgres::{Client as PgClient, NoTls};
use std::env;

fn main() {
    // Create a new HTTP client using the reqwest library.
    let client = Client::new();
    let db_host = env::var("DB_HOST").unwrap_or_else(|_| "localhost".to_string());
    let mut pg_client = PgClient::connect(
        &format!("host={} user=postgres dbname=bitcoin_explorer port=5430", db_host),
        NoTls
    ).unwrap();

    loop {
        // Make a GET request to the BlockCypher API with a 10-second timeout.
        // The 'send' method initiates the request and waits for the response.
        let res = client.get("https://api.blockcypher.com/v1/btc/main")
            .timeout(Duration::from_secs(10))
            .send();

        match res {
            Ok(response) => {
                // Parse the response body as JSON if the request was successful.
                match response.json::<Value>() {
                    Ok(json) => {
                        // Log the JSON response for debugging purposes.
                        println!("JSON Response: {:?}", json);

                        // Extract the block_height from the JSON response if it's an integer.
                        if let Some(block_height) = json["height"].as_i64() {
                            println!("Fetched block height: {}", block_height);

                            // Insert the block_height into the database, ignoring duplicates.
                            // 'ON CONFLICT (block_height) DO NOTHING' ensures that duplicate entries are not inserted.
                            pg_client.execute(
                                "INSERT INTO block_data (block_height) VALUES ($1) ON CONFLICT (block_height) DO NOTHING",
                                &[&block_height]
                            ).unwrap();
                            println!("Inserted block height: {}", block_height);
                        } else {
                            // Log an error message if the 'height' field is missing or not an integer.
                            println!("Error: 'height' field is missing or not an integer");
                        }
                    },
                    // Log an error message if parsing the JSON response fails.
                    Err(e) => println!("Error parsing JSON: {:?}", e),
                }
            },
            // Log an error message if the API request fails.
            Err(e) => println!("Error Fetching Data: {:?}", e),
        }

        // Sleep for 60 seconds before making the next API call.
        std::thread::sleep(Duration::from_secs(60));
    }
}

