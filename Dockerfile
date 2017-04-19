FROM node

ENV PORT 80
EXPOSE 80
WORKDIR /app

ADD package.json /app/
RUN npm install

COPY . /app

CMD npm start