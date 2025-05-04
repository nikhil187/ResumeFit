# Resume Matcher API

Backend API server for the ResumeFit application.

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   MONGODB_URI=mongodb+srv://your_mongodb_username:your_mongodb_password@cluster0.mongodb.net/resumeFit?retryWrites=true&w=majority
   PORT=5005
   ```
   Replace the MongoDB URI with your actual MongoDB connection string.

## Running the server

To start the server:

```
node server.js
```

The server will run on port 5005 by default or the port specified in your `.env` file.

## API Endpoints

- `GET /api/test` - Test if the API is working
- `POST /api/reports` - Save a new report
- `GET /api/reports/:userId` - Get all reports for a user
- `GET /api/reports/:userId/:reportId` - Get a specific report
- `PATCH /api/reports/:userId/:reportId/title` - Update a report title
- `DELETE /api/reports/:userId/:reportId` - Delete a report

## Connecting with Frontend

The frontend should be configured to connect to the API at `http://localhost:5005/api` when running in development mode. 