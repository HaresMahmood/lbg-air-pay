FROM --platform=linux/arm64/v8 docker.io/node:20-alpine AS build

WORKDIR /src/my-app

COPY package.* .

RUN npm install

COPY . .

EXPOSE 3000

RUN echo ###API_URL### > .env

CMD npm run dev