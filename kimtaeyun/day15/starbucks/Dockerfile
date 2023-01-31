FROM node:14

COPY ./package.json /day15/
COPY ./yarn.lock /day15/
WORKDIR /day15/
RUN yarn install

COPY . /day15/

CMD yarn start:dev