import express, { Request, Response } from 'express';
const app = express();
import cors from 'cors';
import bookRouter from './app/module/book/book.route';
import orderRouter from './app/module/order/order.route';
import globalErrorHandler from './app/globalErrorHandler/globalErrorHandler';

// parser
app.use(express.json());
app.use(cors());

app.use('/api/products', bookRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'server live',
  });
});

app.use(globalErrorHandler);

export default app;
