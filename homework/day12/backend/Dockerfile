FROM node:18

COPY ./package.json /Mini-Project/
COPY ./yarn.lock /Mini-Project/
WORKDIR /Mini-Project/
RUN yarn install

COPY . /Mini-Project/

CMD yarn start:dev