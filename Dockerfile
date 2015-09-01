FROM node:latest

EXPOSE 80

RUN mkdir /usr/hello-phoenix
ADD . /usr/hello-phoenix
WORKDIR /usr/hello-phoenix

RUN npm install

ENTRYPOINT [ "node", "main.js" ]