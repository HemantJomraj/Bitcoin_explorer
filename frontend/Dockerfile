# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory
WORKDIR /usr/src/frontend

# Copy the package.json and yarn.lock files
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application
COPY . .

# Build the React app
RUN yarn build

# Install serve to serve the React app
RUN yarn global add serve

# Expose the port the app runs on
EXPOSE 5000

# Serve the React app
CMD ["serve", "-s", "build", "-l", "5000"]
