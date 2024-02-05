FROM node:latest

WORKDIR /usr/src/app

RUN npm install express mysql2 

COPY ./server.js ./

EXPOSE 3000

CMD [ "node", "server.js" ]
