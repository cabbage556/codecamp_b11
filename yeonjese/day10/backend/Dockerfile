# 1. 운영체제 및  프로그램 설치(일일이 설치)
# FROM ubuntu:22.04

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn


# 1. 운영체제 및  프로그램 설치(이미 리눅스,노드,npm,yarn 모두설치되있음)

FROM node:14

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커컴퓨터 안으로 복사하기
# RUN mkdir myfolder  (아래에서 COPY할때 자동생성되므로 굳이 필요없음)
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder


# RUN cd ./myfolder/ (아래와 같은 명령어)
WORKDIR /myfolder/
RUN yarn install
COPY . /myfolder/
# 3. 도커안에서 index.js 실행시키기
# CMD node --unhandled-rejections=strict index.js
CMD node index.js
# CMD node --max-old-space-size=1536 index.js
# RUN node index.js와 CMD node index.js 와의 차이? (이미지저장할땐 안쓰이고 이미지실행할때 실행됨, RUN은 여러번 쓸수있지만 CMD는 한번밖에 못씀-마지막에 한번만 실행)
# 명령어순으로 docker build한 뒤 이미지로 저장
