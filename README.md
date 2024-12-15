# Book shop

- Live Site: [Book-shop](https://book-shop-phi-rouge.vercel.app/)


### Products 1. Create a Book
- Add a new Book with all relevant details.
- Api:
```bash
https://book-shop-phi-rouge.vercel.app/api/products
```
- Method: POST
- Request Body:
```json
{
  "title": "The hiper",
  "author": "Rovert hiper",
  "price": 150,
  "category": "Fiction",
  "description": "A story about the Egyptian dream.",
  "quantity": 100,
  "inStock": true
}
```


### Products 2. Get All Books
- Get all books books with details like name, author, price, category, etc.
- Get all books from the same category, you’ll take this as `/api/products?searchTerm=category` searchTerm can be `title, author, category`
- Api:
```bash
https://book-shop-phi-rouge.vercel.app/api/products
```
- or : searching by category 
```bash 
https://book-shop-phi-rouge.vercel.app/api/products?searchTerm=Fiction
```
- or:  searching by title 
```bash
https://book-shop-phi-rouge.vercel.app/api/products?searchTerm=The hiper
```
- or:  searching by author 
```bash
https://book-shop-phi-rouge.vercel.app/api/products?searchTerm=Rovert hiper
```
- Method: GET


### Products 3. Get a Specific Books
- The details of a specific book by ID.
- Api:
```bash
https://book-shop-phi-rouge.vercel.app/api/products/:productId
```
- Method: GET


### Products 4. Update a Book
- Modify details like price or quantity of an existing books
- Api:
```bash
https://book-shop-phi-rouge.vercel.app/api/products/:productId
```
- Method: PUT
- Request Body:
```json
{
  "price": 250,
  "category": "nobel"
}
```


### Products 5. Delete a Book
- Remove a books by using id.
- Api:
```bash
https://book-shop-phi-rouge.vercel.app/api/products/:productId
```
- Method: DELETE


### Products 6. Order a Book
- When an order is placed, reduce the **quantity** in the product model.
- If the inventory quantity goes to zero, set **inStock** to `false`.
- Api:
```bash
https://book-shop-phi-rouge.vercel.app/api/orders
```
- Method: POST
- Request Body:
```json
{
  "email": "customer@example.com",
  "product": "675471635232d5565255c1e3",
  "quantity": 2,
  "totalPrice": 30
}
```


### Products 7. Calculate Revenue from Orders (Aggregation)
- Use aggregation to calculate the total revenue generated from all orders.
- Api:
```bash
https://book-shop-phi-rouge.vercel.app/api/orders/revenue
```
- Method: GET

### Error Handling
- Generic error response structure for validation errors, resource not found, and server issues.


## Models  
### Book Model  
- **Fields**:  
  - `title` (string): Book title.  
  - `author` (string): Author name of the book.   
  - `price` (number): Price of the book.
  - `category` (string): Category of the book. 
  - `description` (string): Book description.  
  - `quantity` (number): Available quantity.  
  - `inStock` (boolean): Stock status.
  - `createdAt`: Date;
  - `updatedAt`: Date;

### Order Model  
- **Fields**:  
  - `email`: string;
  - `product`: string;
  - `quantity`: number;
  - `totalPrice`: number;
  - `createdAt`: Date;
  - `updatedAt`: Date;
    

## Technology I have used:
- **npm**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **TypeScript**
- **dotenv**
- **cors**
- **nodemon**
