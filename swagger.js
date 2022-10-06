const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = ['./src/server.ts'];

swaggerAutogen(outputFile, endpointsFiles);
