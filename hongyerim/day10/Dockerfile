FROM node:17

COPY ./package.json /myfolder/
COPY ./yarn.lock /myfoler/
WORKDIR /myfolder/
RUN yarn install

COPY . /myfolder/

CMD yarn start:dev