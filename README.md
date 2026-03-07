# Node.js Backend Template

A simple backend template using **Node.js**, **Express**, and **MongoDB (Mongoose)** with a clean MVC-style structure.

## Features

- Express server with basic middleware (JSON parsing)
- MongoDB connection using Mongoose
- Sample `User` model (name, email)
- REST API endpoints:
  - `POST /api/users` – create user
  - `GET /api/users` – get all users

## Project Structure

```text
backend-template/
 ├ config/
 │  └ db.js
 ├ controllers/
 │  └ userController.js
 ├ models/
 │  └ userModel.js
 ├ routes/
 │  └ userRoutes.js
 ├ server.js
 ├ package.json
 └ README.md
