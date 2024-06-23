# Use official Rust image as a base
FROM rust:1.63 as builder

# Set working directory
WORKDIR /usr/src/app

# Copy Cargo.toml and Cargo.lock
COPY ./bitcoin_ingestion/Cargo.toml ./bitcoin_ingestion/Cargo.lock ./

# Copy the source code
COPY ./bitcoin_ingestion/src ./src

# Build the app
RUN cargo build --release

# Use slim debian as base
FROM debian:buster-slim

# Set working directory
WORKDIR /usr/src/app

# Copy the build artifact from the builder stage
COPY --from=builder /usr/src/app/target/release/bitcoin_ingestion .

# Install necessary dependencies
RUN apt-get update && apt-get install -y libssl-dev

# Expose port
EXPOSE 8080

# Start the app
CMD ["./bitcoin_ingestion"]
