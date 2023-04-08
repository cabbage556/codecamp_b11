# 1. 운영체제 및 프로그램 설치 (하나씩 설치하는 방식)
# FROM ubuntu:22.04

# 우분투에 nodejs 설치
# RUN sudo apt install nodejs

# 우분투에 yarn 설치(글로벌 옵션)
# RUN sudo npm install -g yarn

# 1. 운영체제 및 프로그램 설치 (이미 우분투, node, npm, yarn까지 모두 설치된 컴퓨터 이미지 다운로드 방식)
FROM node:14

# 2. myfolder 폴더를 생성하고, 모든 파일을 myfolder 안으로 복사하기
# RUN mkdir myfolder => 아래에서 COPY할 때 자동 생성되므로 필요 없음
COPY . /myfolder/

# RUN cd ./myfolder/

# myfolder를 작업폴더로 설정, 커서가 myfolder에서 깜빡거림
WORKDIR /myfolder/
RUN yarn install

# 3. 도커 안에서 index.js 실행하기
CMD yarn start:dev