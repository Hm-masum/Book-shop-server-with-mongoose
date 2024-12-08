import { Router } from 'express';
import { orderControllers } from './order.controller';

const orderRouter = Router();

orderRouter.post('/', orderControllers.createOrder);
orderRouter.get('/revenue', orderControllers.calculateRevenue);

export default orderRouter;
