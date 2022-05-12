import express from 'express';
import router from './router/index.js';

const app = express();
app.use(express.json());
app.use(router);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
