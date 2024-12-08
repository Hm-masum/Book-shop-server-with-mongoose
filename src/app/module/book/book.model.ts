import { model, Schema } from 'mongoose';
import { IBook } from './book.interface';

const bookSchema = new Schema<IBook>({
  title: { type: String, required: [true, 'Title is required'] },
  author: { type: String, required: [true, 'Author is required'] },
  price: {
    type: Number,
    min: [0, 'Price must be a positive number'],
    required: [true, 'Title is required'],
  },
  category: { type: String, required: [true, 'Category is required'] },
  description: { type: String, required: [true, 'Description is required'] },
  quantity: {
    type: Number,
    min: [1, 'Quantity must be a positive number'],
    required: [true, 'Quantity is required'],
  },
  inStock: { type: Boolean, required: [true, 'InStock is required'] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Book = model<IBook>('Book', bookSchema);
export default Book;
