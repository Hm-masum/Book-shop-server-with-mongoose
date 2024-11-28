import express, { Request, Response } from 'express';
const app = express();
import cors from 'cors';
import bookRouter from './module/book/book.route';

// parser
app.use(express.json());
app.use(cors());

app.use('/api/book', bookRouter);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'server live',
  });
});

export default app;
