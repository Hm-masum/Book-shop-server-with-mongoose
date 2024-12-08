import { NextFunction, Request, Response } from 'express';
import { bookServices } from './book.service';

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookData = req.body;
    const result = await bookServices.createBookIntoDB(bookData);
    res.send({
      status: true,
      message: 'Book created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { searchTerm } = req.query;

    const result = await bookServices.getBooksFromDB(searchTerm as string);
    res.send({
      status: true,
      message: 'Books retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.productId;
    const result = await bookServices.getSingleBookFromDB(id);
    res.send({
      status: true,
      message: 'Book retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.productId;
    const payload = req.body;
    const result = await bookServices.updateBookFromDB(id, payload);
    res.send({
      status: true,
      message: 'Book updated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.productId;
    await bookServices.deleteBookFromDB(id);
    res.send({
      status: true,
      message: 'Book deleted successfully',
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

export const bookController = {
  createBook,
  getBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
