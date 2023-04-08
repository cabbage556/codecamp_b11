# 1. 운영체제 및 프로그램 설치 (하나하나 입력하는 방식)
# FROM ubuntu:22.04 

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn

# 1. 운영체제 및 프로그램 설치(이미 리눅스, node, yarn, npm까지 모두 깔려 있는 모든 컴퓨터 다운로드하는 방식)
FROM  node:14

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
# RUN mkdir myfolder => 아래에서 COPY할 때, 자동으로 폴더가 생성이 되므로 굳이 필요없다.
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install

COPY . /myfolder/

# 3. 도커안에서 index.js 실행시키기
CMD yarn start:dev

# //RUN은 한파일에 여러번 사용가능    실행을 다시킨 후 저장
# //CMD는 한파일에 한번 사용가능  // 2번까지만 저장, 이 저장된 이미지를 실행시킬 때 실행 // 프로그램을 실행시킬 때 CMD사용