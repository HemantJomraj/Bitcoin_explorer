# Use the official Rust image as the base image
FROM rust:latest

# Set the working directory
WORKDIR /usr/src/bitcoin_ingestion

# Copy the current directory contents into the container
COPY . .

# Build the Rust project
RUN cargo build --release

# Run the Rust program
CMD ["./target/release/bitcoin_ingestion"]
