FROM node:14

COPY ./package.json /main-project/
COPY ./yarn.lock /main-project/
WORKDIR /main-project/
RUN yarn install

COPY . /main-project/

CMD yarn start:dev