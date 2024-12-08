import { NextFunction, Request, Response } from 'express';
import { orderServices } from './order.service';

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orderData = req.body;
    const result = await orderServices.createOrderIntoDB(orderData);
    res.send({
      status: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const calculateRevenue = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await orderServices.calculateRevenueFromDB();
    res.send({
      status: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const orderControllers = {
  createOrder,
  calculateRevenue,
};
