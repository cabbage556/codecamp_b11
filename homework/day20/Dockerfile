FROM node:14

COPY ./package.json /day20/
COPY ./yarn.lock /day20/
WORKDIR /day20/
RUN yarn install

COPY . /day20/

CMD yarn start:dev