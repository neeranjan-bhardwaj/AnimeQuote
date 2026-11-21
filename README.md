# Anime Quote API

A backend REST API for managing anime quotes, built with TypeScript, Express.js, and MongoDB.

This is a personal learning project focused on backend development, API design, authentication, database integration, and CRUD operations.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Database](#database)
- [Project Goals](#project-goals)

## About the Project

Anime Quote API is a backend application that provides functionality for working with anime quotes stored in a MongoDB database.

The project was developed to explore backend development concepts and gain practical experience building APIs using TypeScript and Express.js.

It includes authentication functionality, password hashing, database operations, and CRUD functionality.

This project does not include a frontend. All functionality is exposed through API endpoints.

## Features

- **Anime Quotes:** Retrieve random anime quotes.
- **Database Integration:** Store and manage data using MongoDB.
- **Authentication:** Password hashing using bcrypt.
- **CRUD Operations:** Create, read, update, and delete data.
- **Environment Configuration:** Manage application settings through environment variables.
- **TypeScript:** Type-safe backend development.

## Tech Stack

| Technology | Purpose |
|---|---|
| TypeScript | Main programming language |
| Express.js | Backend framework |
| Bun / Node.js | JavaScript runtime |
| MongoDB | Database |
| bcrypt | Password hashing |

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Git
- Bun or Node.js with npm
- MongoDB

### Clone the Repository

```bash
git clone <repository-url>
cd AnimeQuote/Backend
```

Replace `<repository-url>` with your repository URL.

### Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/anime_quote
JWT_SECRET=your_secret_key
```

| Variable | Description |
|---|---|
| PORT | Port on which the API runs |
| MONGO_URI | MongoDB connection string |
| JWT_SECRET | Secret used for JWT authentication, if implemented |

Make sure MongoDB is running before starting the application.

### Install Dependencies

Using Bun:

```bash
bun install
```

Or using npm:

```bash
npm install
```

### Run the Development Server

Using Bun:

```bash
bun run dev
```

Using npm:

```bash
npm run dev
```

The API should be available at:

```text
http://localhost:3000
```

## API Endpoints

The following endpoints are available in the application:

| Endpoint | Purpose |
|---|---|
| `/Anime` | Anime Quote |
| `/Forgot` | Forgot-password functionality |
| `/Login` | User login |
| `/Sigup` | User registration |
| `/Reset` | Password reset functionality |

**Note:** Refer to the implementation for the exact HTTP methods, request parameters, and response formats.

## Authentication

The project includes authentication-related functionality.

- Password hashing using bcrypt.
- Login and registration endpoints.
- JWT-related environment configuration.

## Database

MongoDB is used to store application data.

The application connects to a local MongoDB instance by default. The database connection is configured through the `MONGO_URI` environment variable.

## Project Goals

The main purpose of this project was to gain practical experience with:

- Building REST APIs using Express.js.
- Working with TypeScript in backend applications.
- Integrating MongoDB with a backend application.
- Implementing authentication-related functionality.
- Performing CRUD operations.
- Managing application configuration through environment variables.

---

**Project Type:** Personal Learning Project  
**Focus:** Backend Development  
**Status:** Personal Development / Learning
