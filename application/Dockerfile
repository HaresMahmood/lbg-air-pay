FROM registry.access.redhat.com/ubi9/nodejs-20 AS build

WORKDIR /src/my-app

COPY package.* .

RUN npm install

COPY . .

EXPOSE 3000

RUN echo ###API_URL### > .env

CMD npm run dev
