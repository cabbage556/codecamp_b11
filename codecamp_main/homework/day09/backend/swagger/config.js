export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "4일차 API 명세서 만들기",
      version: "1.0.0",
    },
  },
  apis: ["./swagger/*.swagger.js"], // files containing annotations as above
};
