import { Request, Response } from 'express';
import { bookServices } from './book.service';

const createBook = async (req: Request, res: Response) => {
  try {
    const bookData = req.body;
    const result = await bookServices.createBookIntoDB(bookData);
    res.send({
      status: true,
      message: 'Book created successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

const getBooks = async (req: Request, res: Response) => {
  try {
    const result = await bookServices.getBooksFromDB();
    res.send({
      status: true,
      message: 'Books retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

const getSingleBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await bookServices.getSingleBookFromDB(id);
    res.send({
      status: true,
      message: 'Book retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

const updateBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const payload = req.body;
    const result = await bookServices.updateBookFromDB(id, payload);
    res.send({
      status: true,
      message: 'Book updated successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await bookServices.deleteBookFromDB(id);
    res.send({
      status: true,
      message: 'Book deleted successfully',
      data: {},
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

export const bookController = {
  createBook,
  getBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
