const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const OpenApiValidator = require('express-openapi-validator');
const swaggerDoc = YAML.load('./swagger.yaml');

const applyMiddleware = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
  app.use(
    OpenApiValidator.middleware({
      apiSpec: './swagger.yaml',
    })
  );
};

module.exports = applyMiddleware;
