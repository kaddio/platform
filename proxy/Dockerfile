FROM node:22-slim

# RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/
RUN npm install --production

COPY ./index.js /usr/src/app
COPY ./certs /usr/src/app/certs

CMD ["npm", "start"]