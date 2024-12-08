import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: [true, 'Email is required.'],
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      },
      message: '{VALUE} is not valid email',
    },
  },
  product: { type: String, required: [true, 'Product is required'] },
  quantity: {
    type: Number,
    min: [1, 'Quantity must be a positive number'],
    required: [true, 'Quantity is required'],
  },
  totalPrice: {
    type: Number,
    min: [1, 'Total Price must be a positive number'],
    required: [true, 'Total Price is required'],
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Order = model<IOrder>('Order', orderSchema);
export default Order;
