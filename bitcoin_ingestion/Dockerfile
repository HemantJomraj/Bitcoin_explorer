FROM rust:latest

WORKDIR /usr/src/bitcoin_ingestion

COPY . .

RUN cargo build --release

CMD ["./target/release/bitcoin_ingestion"]
