module.exports = {
    components: {},
    info: {
      title: "NextJs Swagger Setup Example",
      version: "1.0.0",
      description: "This is an example of setting up swagger",
    },
    host: "localhost:3000",
    basePath: "/api",
    securityDefinitions: {
      apiKeyAuth: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        description: "Bearer <JWT-TOKEN>",
      },
    },
    security: [{ apiKeyAuth: [] }],
    apis: ["pages/api/**/*.ts"],
  };
  