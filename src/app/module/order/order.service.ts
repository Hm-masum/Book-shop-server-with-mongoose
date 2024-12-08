import AppError from '../../error/AppError';
import Book from '../book/book.model';
import { IOrder } from './order.interface';
import Order from './order.model';

const createOrderIntoDB = async (orderData: IOrder) => {
  const productExist = await Book.findById(orderData.product);
  if (!productExist) {
    throw new AppError(400, 'Product is not exist');
  }

  if (productExist.inStock === false) {
    throw new AppError(400, 'Product is not in stock');
  }

  if (productExist.quantity < orderData.quantity) {
    throw new AppError(400, 'Insufficient product in stock');
  }

  const result = await Order.create(orderData);

  const quantity = productExist.quantity - orderData.quantity;
  let inStock = true;
  if (quantity === 0) {
    inStock = false;
  }
  await Book.findOneAndUpdate(
    { _id: orderData.product },
    { quantity, inStock },
  );

  return result;
};

const calculateRevenueFromDB = async () => {
  const result = await Order.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
    { $project: { _id: 0, totalRevenue: 1 } },
  ]);
  return result;
};

export const orderServices = {
  createOrderIntoDB,
  calculateRevenueFromDB,
};
