# 1. 운영체제 및 프로그램 설치하기.(하나하나 입력하는 방식!)
# FROM ubuntu:22.04

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn

# 착한 사람이 만들어준 방식.
# 1. 운영체제 및 프로그램 설치(이미 리눅스, node, npm, yarn까지 모두 깔려있는 컴퓨터 다운로드하는 방식)
FROM node:14

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기.
# COPY 도커 바깥에있는 것을 안쪽으로 복사해죠~
# RUN mkdir myfolder => 아래에서 COPY할 때,자동으로 만들어주므로 굳이 필요없음!
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install

COPY . /myfolder/


# 도커 빌드 : 도커 저장 및 최적화 => 도커 이미지 : 도커 빌드가 하나의 이미지로 저장 한것.

# 3. 도커 안에서 index.js 실행시키기.
# 01.
# RUN node index.js
# 02. CMD 명령어는 그 위에 스크립트까지 저장된다. 그 위에 것들을 실핼시킬때
# 언제쓰냐? 그 위에 만든 프로그램들을 실행 시킬때 (CMD가 들어간 부분들은 저장이 안된다.) =>실행 명령어
# CMD는 마지막에 한번만 쓸수 있다. (COPY는 무수히 쓸 수 있음)

# docker run 으로 실행한다. => 대체 명령어 
CMD yarn start:dev  

# 03.
# RUN mkdir qqq


# 1.bulid ->컴퓨터 만들어짐(도커 이미지)
# 2.이미지 실행 