FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE $PORT

# Define the command to run the app
CMD [ "node", "index.js" ]