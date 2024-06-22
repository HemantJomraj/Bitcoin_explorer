use reqwest::blocking::Client;
use serde_json::Value;
use std::time::Duration;
use postgres::{Client as PgClient, NoTls};
use std::env;
use std::thread;

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
                        if json.get("error").is_some() {
                            println!("Error from API: {:?}", json["error"]);
                            thread::sleep(Duration::from_secs(120));
                            continue;
                        }

                        if let Some(block_height) = json["height"].as_i64() {
                            let result = pg_client.execute(
                                "INSERT INTO block_data (block_height) VALUES ($1) ON CONFLICT (block_height) DO NOTHING",
                                &[&block_height]
                            );
                            match result {
                                Ok(_) => println!("Inserted block height: {}", block_height),
                                Err(err) => println!("Error inserting block height: {:?}", err),
                            }
                        } else {
                            println!("Error: 'height' field is missing or not an integer");
                        }

                        if let Some(transaction_count) = json["unconfirmed_count"].as_i64() {
                            let result = pg_client.execute(
                                "INSERT INTO transaction_data (transaction_count, created_at) VALUES ($1, NOW())",
                                &[&transaction_count]
                            );
                            match result {
                                Ok(_) => println!("Inserted transaction count: {}", transaction_count),
                                Err(err) => println!("Error inserting transaction count: {:?}", err),
                            }
                        } else {
                            println!("Error: 'unconfirmed_count' field is missing or not an integer");
                        }
                    },
                    Err(e) => println!("Error parsing JSON: {:?}", e),
                }
            },
            Err(e) => println!("Error fetching data: {:?}", e),
        }

        let res_hashrate = client.get("https://api.blockchain.info/stats")
            .timeout(Duration::from_secs(10))
            .send();

        match res_hashrate {
            Ok(response) => {
                match response.json::<Value>() {
                    Ok(json) => {
                        if let Some(hashrate) = json["hash_rate"].as_f64() {
                            let result = pg_client.execute(
                                "INSERT INTO hash_rate_data (hash_rate, created_at) VALUES ($1, NOW())",
                                &[&hashrate]
                            );
                            match result {
                                Ok(_) => println!("Inserted hashrate: {}", hashrate),
                                Err(err) => println!("Error inserting hashrate: {:?}", err),
                            }
                        } else {
                            println!("Error: 'hash_rate' field is missing or not a valid float");
                        }
                    },
                    Err(e) => println!("Error parsing JSON: {:?}", e),
                }
            },
            Err(e) => println!("Error fetching data: {:?}", e),
        }

        thread::sleep(Duration::from_secs(120));
    }
}
