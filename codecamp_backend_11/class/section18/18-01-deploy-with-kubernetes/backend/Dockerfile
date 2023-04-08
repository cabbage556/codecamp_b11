# 1. 운영체제 및 프로그램 설치 (하나씩 설치하는 방식)
# FROM ubuntu:22.04

# 우분투에 nodejs 설치
# RUN sudo apt install nodejs

# 우분투에 yarn 설치(글로벌 옵션)
# RUN sudo npm install -g yarn

# 운영체제 및 프로그램 설치 (이미 우분투, node, npm, yarn까지 모두 설치된 도커 이미지 다운로드 방식)
FROM node:14

# 다시 빌드하더라도 캐시에서 그대로 가져오기
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install

# 소스코드 수정 후 다시 빌드하면 캐시가 깨지기 때문에 소스코드 카피
COPY . /myfolder/

# 도커 안에서 index.js 실행하기
CMD yarn start:dev