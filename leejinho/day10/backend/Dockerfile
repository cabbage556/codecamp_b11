# 1. 운영체제 및 프로그램 설치 // FROM / 자동실행 (하나하나 입력하는 방식)
# docker push / docker FROM(=pull) 하여 컴퓨터(=이미지)를 업로드 & 다운로드 할 수 있음
# FROM ubuntu:22.04
# #apt install 우분투 설치방식
# RUN 명령어
# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn


# 도커 빌드 : 도커 저장 및 최적화 => 도커 이미지 : 도커 빌드가 하나로 저장 된 것
# 이미지 실행 : 


# 1. 운영체제 및 프로그램 설치 (이미 리눅스, node, npm, yarn 까지 모두 깔려있는 컴퓨터 다운로드 하는 방식) 도커 허브로부터
FROM node:14

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
# RUN mkdir myfolder => 아래에서 COPY 할 때, 자동으로 만들어주므로 굳이 폴더를 따로 생성할 필요 없음
# 단 버전의 동일화를 위해 node_modules는 .dockerignore 로 빼줌


COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install

# 이 부분은 포트번호 변경으로 캐시가 깨져 재 실행하는 부분
COPY . /myfolder/



# 3. 도커 안에서 index.js 실행시키기 
# RUN : 해당 명령 실행 결과까지 이미지로 저장
# CMD : CMD 명령 이전까지만 이미지로 저장(따라서 한번밖에 저장 불가) / 단, 프로그램을 실행시킬 때 실행
# WORKDIR : 작업을 하기 위한 커서위치 지정


CMD yarn start:dev
# 이미 해당 docker node에 yarn이 다운로드되어 있기 때문에, 따로 다운 받을 필요 없음


# docker build . : 도커 생성
# sudo docker images : 도커 내 이미지 목록 열기
# sudo docker run 이미지ID : 도커 이미지 실행
# docker ps : (도커 프로세스)도커 안으로 진입  // "도커" 터미널에서 진행
# sudo docker exec -it 컨테이너ID /bin/bash : 컨테이너 실행
# cat 파일명 : docker 이미지 내 파일 열기

# docker ps =>
# sudo docker stop 컨테이너ID : 컨테이너 종료
# docker ps -a : 꺼져 있는 모든 컨테이너 확인
# docker rm 컨테이너ID : 꺼져있는 컨테이너 종료
# docker ps -a -q : 꺼져있는 모든 컨테이너 아이디
# docker rm `docekr ps -a -q` : 컨테이너 모두 삭제 응용
# docker rmi `docker images -q` : 이미지 모두 삭제
# docekr system prune -a : 실행하는 컨테이너 제외 모든 것들 삭제 (한번 더 물어봄)
# 실행하는 내용은 사라지지 않음
# cat 
# vi
# i 누를 시 insert 모드
# :wq : 저장
# 도커 내 4000번 , 도커 밖 2500 // 2500 : 4000