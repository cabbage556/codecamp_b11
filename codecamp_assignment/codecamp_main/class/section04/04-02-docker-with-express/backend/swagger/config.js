export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "나의 API Docs",
      version: "1.0.1",
    },
  },
  apis: ["./swagger/*.swagger.js"], // files containing annotations as above
};
