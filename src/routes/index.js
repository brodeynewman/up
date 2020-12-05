import express from 'express';

const { UP_STAGE } = process.env;

const Router = express.Router();

Router.get('/test', (request, response) => {
  response.json({
    success: true,
    // logging the deployment stage for clarity
    stage: UP_STAGE,
  });
});

export default Router;
