export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "예림의 10일차 과제의 API 설명서",
      version: "1.0.0",
      deccription: "Swagger, Docker-compose 실습을 위한 API 예시입니다.",
    },
  },
  apis: ["./swagger/*.swagger.js"], // files containing annotations as above
};
