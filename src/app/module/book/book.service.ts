import { IBook } from './book.interface';
import Book from './book.model';

const createBookIntoDB = async (bookData: IBook) => {
  const result = Book.create(bookData);
  return result;
};

const getBooksFromDB = async (searchText: string) => {
  let filter = {};

  if (searchText) {
    filter = {
      $or: [
        { title: searchText },
        { author: searchText },
        { category: searchText },
      ],
    };
  }
  const result = Book.find(filter);
  return result;
};

const getSingleBookFromDB = async (id: string) => {
  const result = Book.findById(id);
  return result;
};

const updateBookFromDB = async (id: string, payload: IBook) => {
  const result = Book.findByIdAndUpdate(
    id,
    { ...payload, updatedAt: Date.now() },
    { new: true },
  );
  return result;
};

const deleteBookFromDB = async (id: string) => {
  const result = Book.findByIdAndDelete(id);
  return result;
};

export const bookServices = {
  getBooksFromDB,
  createBookIntoDB,
  getSingleBookFromDB,
  updateBookFromDB,
  deleteBookFromDB,
};
