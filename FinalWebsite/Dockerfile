FROM node:7
WORKER /app
COPY package.json /app
RUN npm install
COPY .  /app
CMD node server.json
EXPOSE 8081