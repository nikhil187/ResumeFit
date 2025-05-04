# ResumeFit Frontend

Frontend application for the ResumeFit resume matching and analysis tool.

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

## Running the app

To start the development server:

```
npm start
```

The app will run on http://localhost:3000 by default.

## Environment Configuration

The app will automatically connect to the local backend API at `http://localhost:5005/api` when running in development mode. In production, it will use the Firebase Functions API.

## Connecting with Backend

Make sure the backend server is running at `http://localhost:5005` before using the app. See the backend repository's README for instructions on setting up and running the backend.

## Features

- Resume analysis against job descriptions
- Skills matching and gap analysis
- Learning roadmap generation
- Technical quiz assessment
- Report saving and management 