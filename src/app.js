import express from 'express';

import Router from './routes';

const { PORT } = process.env;

const app = express();

app.use('/api', Router);

app.listen(PORT, () => (
  console.log('Listening on port: ', PORT)
));
