# Bitcoin Explorer 
![crypto-memes-meta](https://github.com/HemantJomraj/Bitcoin_explorer/assets/69577585/78bfb896-d991-4354-987e-b3ac86ab9c3e)


Welcome to the **Bitcoin Explorer**! This project is brought to you by the dynamic trio who had no idea what they were doing but figured it out! This explorer allows you to visualize Bitcoin metrics derived from both on-chain and off-chain data, all wrapped up in a sleek user interface. We've packaged this bad boy as a Docker container to make it super easy to deploy and run.(We'll add that in soon)

By...

- Hemant Jomraj - 002722469

- Keyur Modi - 002770075

- Varadmurty Mohod - 002772803

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Setup and Installation](#setup-and-installation)
4. [Usage](#usage)
5. [Project Structure](#project-structure)

## Project Overview

Our Bitcoin Explorer is designed to:

1. **Ingest Data**: Continuously fetch data from the Bitcoin network using a Rust program.
2. **Store Data**: Store the fetched data in a SQL database.
3. **Visualize Data**: Provide a real-time, beautiful user interface using TypeScript to visualize both on-chain and off-chain metrics.

### Key Features

- **Real-time Block Height**: See the current block height in real-time.
- **Unique Metrics**: Get insights into unique metrics derived from both on-chain and off-chain data.
- **Smooth UI**: Our user interface is so smooth, it could charm a snake.

## 🛠 Getting Started

### Prerequisites

Before you get started, make sure you have the following installed:

- Docker 🐳
- Rust 🦀
- Node.js (with npm) 🟢

### Setup and Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/HemantJomraj/Bitcoin_explorer.git
    cd Bitcoin_explorer
    ```

2. **Build the Docker image**

    ```bash
    docker build -t bitcoin_explorer .
    ```

3. **Run the Docker container**

    ```bash
    docker run -p 3000:3000 bitcoin_explorer
    ```

4. **Visit the User Interface**

    Open your favorite web browser (yes, even IE if you must) and navigate to `http://localhost:3000`.

### Configuration

- **Database**: We are using a SQL database. You can configure it in the `database/config.rs` file.
- **Bitcoin Client**: The Rust ingestion program calls the Bitcoin client to fetch the data. Configuration can be found in `ingestion/config.rs`.

## 🚀 Usage

1. **Launch the app**: Follow the setup instructions above.
2. **Real-time data**: Watch the real-time block height on the UI.
3. **Metrics Galore**: Explore unique on-chain and off-chain metrics.
4. **Brag**: Tell your friends you built a Bitcoin Explorer, and they’ll think you’re the next Satoshi Nakamoto.
![38dqvy](https://github.com/HemantJomraj/Bitcoin_explorer/assets/69577585/f72339b9-763f-423d-94b4-c804e1f54d93)

## 📁 Project Structure

Here's a brief rundown of our project's structure:
```plaintext
Bitcoin_explorer/
├── backend/                 # Rust code for data ingestion
│   ├── src/
│   └── Cargo.toml
├── frontend/                # TypeScript code for the user interface
│   ├── public/
│   ├── src/
│   └── package.json
├── database/                # SQL database schema and setup
│   ├── config.rs
│   └── schema.sql
├── Dockerfile               # Docker configuration
├── README.md                # This amazing readme
└── .github/
    └── workflows/           # CI/CD workflows
