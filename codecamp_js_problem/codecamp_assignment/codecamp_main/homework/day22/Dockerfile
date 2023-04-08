FROM node:14

COPY ./package.json /day22/
COPY ./yarn.lock /day22/
WORKDIR /day22/
RUN yarn install

COPY . /day22/

CMD yarn start:dev