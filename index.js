import express from 'express';
import router from './router/router.js';
import logger from './middleware/logger.js';
import notFound from './middleware/notFound.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(express.json());
app.use(logger);

app.use('/', router);

app.use(notFound);
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
