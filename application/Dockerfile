FROM registry.access.redhat.com/ubi9/nodejs-20 AS build

WORKDIR /src/my-app

USER root

RUN chown -R 1001:0 /src/my-app && chmod -R ug+rwx /src/my-app && rpm-file-permissions

USER 1001

COPY package.* .

RUN npm install

COPY . .

EXPOSE 3000

RUN echo ###API_URL### > .env

CMD npm run dev
