# E-commerce Order Management API ii

## Description
This is a simple Order Management API built using Node.js, Express, and MongoDB. It allows users to create, retrieve, update, and delete orders.

## Features
- Create a new order
- Retrieve all orders
- Update order status
- Delete an order

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv (for environment variable management)
- CORS (Cross-Origin Resource Sharing)

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:
   ```sh
   git clone [https://github.com/your-repo.git](https://github.com/suryanag0999/e-commerce-backend)
   cd your-repo
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory and add the following:
     ```env
     PORT=6000
     MONGODB_URL=your-mongodb-connection-string
     ```

4. Start the server:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:6000` (or the specified port in `.env`).

## API Endpoints

### 1. Create Order
- **URL:** `POST /orders`
- **Request Body:**
  ```json
  {
    "userName": "John Doe",
    "items": [
      { "name": "Item 1", "price": 10, "quantity": 2 }
    ],
    "totalPrice": 20
  }
  ```
- **Response:**
  ```json
  {
    "_id": "order-id",
    "userName": "John Doe",
    "items": [...],
    "totalPrice": 20,
    "status": "pending"
  }
  ```

### 2. Get All Orders
- **URL:** `GET /orders`
- **Response:**
  ```json
  [
    {
      "_id": "order-id",
      "userName": "John Doe",
      "items": [...],
      "totalPrice": 20,
      "status": "pending"
    }
  ]
  ```

### 3. Update Order Status
- **URL:** `PUT /orders/:id`
- **Request Body:**
  ```json
  { "status": "shipped" }
  ```
- **Response:**
  ```json
  {
    "_id": "order-id",
    "status": "shipped"
  }
  ```

### 4. Delete Order
- **URL:** `DELETE /orders/:id`
- **Response:**
  ```json
  { "message": "Order deleted successfully" }
  ```

## Folder Structure
```
📂 project-root
│── 📂 controllers
│   └── orderController.js
│── 📂 models
│   └── Order.js
│── 📂 routes
│   └── orderRoutes.js
│── 📂 utils
│   └── db.js
│── .env
│── index.js
│── package.json
│── README.md
```

## License
This project is open-source and available under the MIT License.
