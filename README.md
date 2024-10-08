# Contact Management API

Simple ExpressJS CRUD using TypeScript. RESTful API for managing contacts, addresses, and user authentication.

## Key Features

- User registration and authentication
- Contact management (CRUD operations)
- Address management for contacts (CRUD operations)
- Search functionality for contacts

## Authentication

This API uses token-based authentication. After logging in, you'll receive a token that should be included in the `X-API-TOKEN` header for all authenticated requests.

## Project Setup

Create .env file for database connection

```
DATABASE_URL="mysql://username:password@host:port/dbName"
```

```bash
$ npm install

$ npx prisma migrate dev

$ npx prisma generate

$ npm run build

$ npm run start
```