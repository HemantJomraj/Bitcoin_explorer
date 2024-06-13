# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory
WORKDIR /usr/src/api

# Copy the package.json and yarn.lock files
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run the API server
CMD ["node", "index.js"]
