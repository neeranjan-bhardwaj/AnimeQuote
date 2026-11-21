# Anime Quote

A small anime quote API for learning.

## Index

- [About the Project](#about-the-project)
- [Features](#features)
- [How to Use](#how-to-use)

## About the Project

Anime Quote is a backend API that returns random quotes stored in a MongoDB database. This project was created to learn how to build APIs, including authentication and CRUD operations.

## Features

- Random anime quotes
- MongoDB data storage
- Authentication with bcrypt password hashing
- CRUD operations
- TypeScript, Express.js, and MongoDB

## How to Use

### Clone the Repository

```bash
git clone <repository-url>
cd AnimeQuote/Backend
```

Replace `<repository-url>` with the repository URL, then run the setup commands from the backend directory.

### Environment Setup

Create a `.env` file in the backend directory and add:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/anime_quote
JWT_SECRET=your_secret_key
```

Make sure MongoDB is running locally on port `27017`.

### Using Bun

```bash
bun install
bun run dev
```

This installs the dependencies and starts the development server.

### Using Node.js

```bash
npm install
npm run dev
```

This installs the dependencies and starts the development server.

### API Endpoints

When running locally, the API is available at `http://localhost:3000`:

1. `/Forgot`
2. `/Anime`
3. `/Login`
4. `/Sigup`
5. `/Reset`

> This is only an API, with no frontend. It is a personal project created to test and demonstrate my skills.
