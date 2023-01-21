FROM node:14

COPY ./package.json /day10/
COPY ./yarn.lock /day10/
WORKDIR /day10/
RUN yarn install

COPY . /day10/

CMD yarn start:dev