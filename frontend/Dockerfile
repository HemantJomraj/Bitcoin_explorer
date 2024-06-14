FROM node:latest

WORKDIR /usr/src/frontend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

# Set environment variable to allow legacy OpenSSL operations
ENV NODE_OPTIONS=--openssl-legacy-provider

CMD ["npm", "start"]
