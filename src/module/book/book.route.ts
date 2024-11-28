import { Router } from 'express';
import { bookController } from './book.controller';

const bookRouter = Router();

bookRouter.post('/create-book', bookController.createBook);
bookRouter.get('/:id', bookController.getSingleBook);
bookRouter.get('/', bookController.getBooks);
bookRouter.put('/:id', bookController.updateBook);
bookRouter.delete('/:id', bookController.deleteBook);

export default bookRouter;
