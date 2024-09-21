


```md
# Address Book API

A simple Node.js backend API for managing users and their addresses. This project demonstrates key concepts such as relational database design, ORM with Sequelize, and API development with Express. The backend uses MySQL as the database engine and provides a one-to-many relationship between users and addresses.

## Features

- **User-Address Management**: Store user information and associated addresses.
- **One-to-Many Relationship**: Each user can have multiple addresses.
- **Sequelize ORM**: Provides database abstraction, allowing for easier interaction with MySQL.
- **MySQL Database**: Relational database used for storing users and addresses.
- **RESTful API**: Basic RESTful endpoints to create users and their associated addresses.

## Technologies Used

- **Node.js**: JavaScript runtime environment for backend logic.
- **Express**: Lightweight framework for handling HTTP requests and creating APIs.
- **Sequelize**: Object-Relational Mapping (ORM) to interact with the MySQL database.
- **MySQL**: Relational database to store user and address data.
- **MySQL Workbench**: For managing the MySQL database.
- **dotenv**: To manage environment variables for database credentials.
- **Postman**: Used to test the API endpoints (optional but recommended).

## Setup and Installation

### Prerequisites

- Node.js (v12+)
- MySQL installed on your system
- MySQL Workbench (optional)
- Postman or any API testing tool (optional)

### Step-by-Step Guide

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/address-book-api.git
    cd address-book-api
    ```

2. **Install Dependencies**:
    Make sure to install all dependencies required for the project.
    ```bash
    npm install
    ```

3. **Set Up MySQL Database**:
    Create a MySQL database using MySQL Workbench or via terminal:
    ```sql
    CREATE DATABASE address_book;
    ```

4. **Configure Environment Variables**:
    Create a `.env` file in the root directory of the project and configure your MySQL credentials:
    ```env
    DB_USER=your_mysql_username
    DB_PASSWORD=your_mysql_password
    DB_HOST=localhost
    DB_DATABASE=address_book
    ```

5. **Run Database Migrations**:
    Sequelize will automatically sync the models with the database when the app starts. You can force table recreation if needed by adjusting `sequelize.sync()` in the `app.js` file.
    
6. **Run the Application**:
    Start the Node.js server:
    ```bash
    node src/app.js
    ```
    The server will run on `http://localhost:3000`.

7. **Test the API Endpoints**:
    Use Postman or cURL to test the API:

    - **Create a new user with an address**:
      ```
      POST /api/submit
      ```
      Example body:
      ```json
      {
          "name": "John Doe",
          "address": "123 Main St, New York, NY"
      }
      ```

    - **Fetch a user by ID along with their addresses**:
      ```
      GET /api/user/:id
      ```
      Example:
      ```
      GET /api/user/1
      ```

## Project Structure

```bash
address-book-api/
│
├── src/
│   ├── models/
│   │   ├── user.js         # Sequelize model for Users table
│   │   └── address.js      # Sequelize model for Addresses table
│   ├── routes/
│   │   └── api.js          # API routes for user and address management
│   ├── app.js              # Main application file
│   └── database.js         # Sequelize configuration for MySQL connection
├── .env                    # Environment variables (not included in repo)
├── package.json            # Node.js package file
└── README.md               # Project documentation
```

## API Endpoints

### 1. **Create a New User with Address**

**Endpoint**: `POST /api/submit`

**Description**: Creates a new user and their address.

**Request Body**:
```json
{
    "name": "John Doe",
    "address": "123 Main St, New York, NY"
}
```

**Response**:
```json
{
    "message": "User and Address created successfully"
}
```

### 2. **Get a User by ID (with Addresses)**

**Endpoint**: `GET /api/user/:id`

**Description**: Fetches a user by their ID along with their associated addresses.

**Response**:
```json
{
    "id": 1,
    "name": "John Doe",
    "Addresses": [
        {
            "id": 1,
            "address": "123 Main St, New York, NY"
        }
    ]
}
```

## Future Enhancements

- **Authentication**: Add JWT or session-based authentication.
- **Pagination**: Add pagination for retrieving a large number of users and addresses.
- **Validation**: Add validation to ensure valid data is input (e.g., valid address format).
- **Deployment**: Host the API on a cloud platform (Heroku, AWS, etc.).

## Why This Project?

This project demonstrates my understanding of backend development with Node.js and MySQL. I’ve implemented common real-world features like handling relational data, working with an ORM, and developing REST APIs. It is a great foundation that can easily be expanded into a full-featured address book or customer management application.

## Contact

If you'd like to discuss this project or have any questions, feel free to reach out to me via [LinkedIn](https://www.linkedin.com/in/hemanthkumarpujari) or [email](mailto:pujarihemanthkumar2003@gmail.com).

```

