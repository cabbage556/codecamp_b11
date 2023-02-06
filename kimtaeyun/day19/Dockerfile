FROM node:14

COPY ./package.json /day19/
COPY ./yarn.lock /day19/
WORKDIR /day19/
RUN yarn install

COPY . /day19/

CMD yarn start:dev