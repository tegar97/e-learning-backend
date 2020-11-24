FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY ./dist .

EXPOSE 80

ENV MONGODB_USERNAME=tegar
ENV MONGODB_PASSWORD=tegar123xx
ENV MONGODB_URL=cluster0.xjcoi.mongodb.net
ENV MONGODB_NAME=e-learning


CMD ["npm", "start"]