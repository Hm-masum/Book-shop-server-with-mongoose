# Book shop

- Live Site: [Book-shop](https://book-shop-phi-rouge.vercel.app/)


### Products 1. Create a Book
-Add a new Book with all relevant details.
api: `https://book-shop-phi-rouge.vercel.app/api/products`
Method: POST
Request Body:
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
api: `https://book-shop-phi-rouge.vercel.app/api/products`
or : `https://book-shop-phi-rouge.vercel.app/api/products?searchTerm=Fiction`
or: `https://book-shop-phi-rouge.vercel.app/api/products?searchTerm=The hiper`
or: `https://book-shop-phi-rouge.vercel.app/api/products?searchTerm=Rovert hiper`
Method: GET

### Products 3. Get a Specific Books
The details of a specific book by ID.
api: `https://book-shop-phi-rouge.vercel.app/api/products/:productId`
Method: GET

### Products 4. Update a Book
- Modify details like price or quantity of an existing books
api: `https://book-shop-phi-rouge.vercel.app/api/products/:productId`
Method: PUT
Request Body:
```json
{
  "price": 250,
  "category": "nobel"
}
```

### Products 5. Delete a Book
- Remove a books by using id.
api: `https://book-shop-phi-rouge.vercel.app/api/products/:productId`
Method: DELETE

### Products 6. Order a Book
- When an order is placed, reduce the **quantity** in the product model.
- If the inventory quantity goes to zero, set **inStock** to `false`.
api: `https://book-shop-phi-rouge.vercel.app/api/orders`
Method: POST
Request Body:
{
  "email": "customer@example.com",
  "product": "675471635232d5565255c1e3",
  "quantity": 2,
  "totalPrice": 30
}

### Products 7. Calculate Revenue from Orders (Aggregation)
**Calculate Revenue:** Use aggregation to calculate the total revenue generated from all orders.
api: `https://book-shop-phi-rouge.vercel.app/api/orders/revenue`
Method: GET

### Error Handling
- Generic error response structure for validation errors, resource not found, and server issues.

## Technology I have used:
- **npm**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **TypeScript**
- **dotenv**
- **cors**
- **nodemon**
