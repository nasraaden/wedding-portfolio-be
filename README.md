# Wedding Portfolio Backend Documentation

## Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm run server** to start the local server
- **npm test** to start server using testing environment

### Backend framework

- Express for flexibility, simple routing, and middleware support
- Postgres for data persistence

## Endpoints

#### Auth Routes

| Method | Endpoint         | Access Control | Description                      |
| ------ | ---------------- | -------------- | -------------------------------- |
| POST   | `/auth/register` | all users      | Register a new user account.     |
| POST   | `/auth/login`    | all users      | Login with a registered account. |

#### Users Routes

| Method | Endpoint           | Access Control | Description                           |
| ------ | ------------------ | -------------- | ------------------------------------- |
| GET    | `/users`           | all users      | Returns list of all users.            |
| GET    | `/users/:id`       | all users      | Returns info for a single user by id. |
| POST   | `/users/:id/posts` | all users      | Adds a new post to view.              |
| GET    | `/users/:id/posts` | all users      | Returns all posts by user.            |
| PUT    | `/users/:id`       | all users      | Update user's account info by id.     |
| DELETE | `/users/:id`       | all users      | Delete user's account by id.          |

#### Posts Routes

| Method | Endpoint     | Access Control | Description                |
| ------ | ------------ | -------------- | -------------------------- |
| GET    | `/posts`     | all users      | Returns list of all posts. |
| GET    | `/posts/:id` | all users      | Returns single post by id. |

## Data Model

#### Users

---

```
{

}
```

#### Posts

---

```
{

}
```

### Actions

Functions list here

### Environment Variables

The .env file includes the following:
\_ DB_DEV
\_ DB_TEST
