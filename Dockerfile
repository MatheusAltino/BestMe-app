FROM node:alpine

WORKDIR /usr/app
COPY packege*.json ./

RUN npm install

COPY . .

EXPOSE 5000
 
CMD ["node", "index.js"]