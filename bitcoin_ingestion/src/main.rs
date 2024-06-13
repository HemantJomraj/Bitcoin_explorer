use reqwest::blocking::Client;
use serde_json::Value;
use std::time::Duration;
use postgres::{Client as PgClient, NoTls};
use std::env;

fn main() {
    let client = Client::new();
    let db_host = env::var("DB_HOST").unwrap_or_else(|_| "localhost".to_string());
    let mut pg_client = PgClient::connect(
        &format!("host={} user=postgres dbname=bitcoin_explorer port=5430", db_host),
        NoTls
    ).unwrap();

    loop {
        let res = client.get("https://api.blockcypher.com/v1/btc/main")
            .timeout(Duration::from_secs(10))
            .send();

        match res {
            Ok(response) => {
                match response.json::<Value>() {
                    Ok(json) => {
                        println!("JSON Response: {:?}", json);

                        if let Some(block_height) = json["height"].as_i64() {
                            println!("Fetched block height: {}", block_height);
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

        std::thread::sleep(Duration::from_secs(60));
    }
}
