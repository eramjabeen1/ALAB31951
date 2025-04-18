# ALAB31951 - Grades API (Mongoose Refactor)

This project is a refactored version of the original Grades API, now using **Mongoose** to interact with **MongoDB Atlas**. Built for Per Scholas Software Engineering assignment ALAB319.5.1.

## Project Structure

- `models/Grade.js` – Mongoose schema for student grades
- `routes/grades.js` – Express router with GET and POST endpoints
- `db.js` – Connects to MongoDB using environment variables
- `index.js` – Main Express server with route and DB connection setup

## Features

- `GET /grades` – Fetch all grades from MongoDB
- `POST /grades` – Add a new grade to the database
- Mongoose schema validation
- `.env` file to store secrets (excluded from GitHub)

## How to Use

1. Clone the repo
2. Run:
   ```bash
   npm install
3. Create a .env file in the root with: MONGO_URI=your_mongodb_connection_string
4. Start the server: npm start
5. Go to:
http://localhost:3000 → You should see:
"Grades Mongoose API running!"

## Routes
GET /grades
Returns all grade documents from MongoDB

POST /grades
Accepts JSON body like:
{
  "student": "Eram Jabeen",
  "subject": "Math",
  "score": 95
}

## Notes from the Developer

This project was built independently without using the provided class CodeSandbox starter.  
I chose to rebuild the app from scratch in my own local VS Code environment, using Mongoose for the full refactor.  
I wanted to learn as I go hands on, even if it meant more confusion because that’s how things actually stick for me.  
Postman was used to test the routes, and everything was configured manually from MongoDB Atlas to environment variables.

The goal was to understand how each part connects by building it myself first.  
That said, I understand how important it is to be able to work with and refactor prewritten code especially in the real world where we build on top of existing systems.  
So I plan to try it both ways: from scratch for learning, and with the class starter to practice refactoring directly.  
(And because I don’t want peace... I want problems, always.)


Author

**Eram Jabeen**  
Solo parent coder .. learning to build while rebuilding.  
This project came with errors, confusion, redirections and growth. 
Built this with Node.js, Express, Mongoose & 1001 interruptions from the little ones. 

