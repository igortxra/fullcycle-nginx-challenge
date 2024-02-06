FROM node:latest

WORKDIR /usr/src/app

RUN npm install --save express mysql2 

EXPOSE 3000

COPY . .

CMD [ "node", "server.js" ]
