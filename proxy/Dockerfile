FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm ci --omit=dev

COPY . .

EXPOSE 10000

CMD ["node", "index.js"]