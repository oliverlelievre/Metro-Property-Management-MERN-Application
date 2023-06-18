FROM node:18-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . /app

RUN yarn run build

EXPOSE 3000

CMD [ "yarn", "start"]