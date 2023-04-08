FROM node:14

COPY ./package.json /day18/
COPY ./yarn.lock /day18/
WORKDIR /day18/
RUN yarn install

COPY . /day18/

CMD yarn start:dev