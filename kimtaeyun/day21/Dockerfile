FROM node:14

COPY ./package.json /day21/
COPY ./yarn.lock /day21/
WORKDIR /day21/
RUN yarn install

COPY . /day21/

CMD yarn start:dev