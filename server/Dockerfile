FROM node:18-alpine

RUN mkdir -p src/app

WORKDIR /src/app

COPY package.json yarn.lock /src/app/

RUN yarn install

COPY . /src/app

EXPOSE 9000

CMD [ "yarn", "start"]