FROM node:20.12.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3680

EXPOSE 3680

CMD [ "npm", "start" ]