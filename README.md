# ResumeFit

ResumeFit is a comprehensive application that helps job seekers match their resumes with job descriptions, providing detailed feedback on skill matches, generating quiz questions, and offering insights to improve job compatibility.

## Live Demo

The application is fully deployed and available at:

- **Frontend:** [https://se11-cf96b.web.app](https://se11-cf96b.web.app)
- **Backend API:** `https://us-central1-se11-cf96b.cloudfunctions.net/api`
- 
## Features

* Resume analysis against job descriptions
* Skills matching and gap analysis
* Learning roadmap generation
* Practice Quiz based on Job Description
* Technical quiz assessment
* Report saving and management
* Interview question generation
* User authentication with email verification
* MongoDB integration for storing analysis reports
* Detailed match analysis with visual charts

## Project Structure

The project consists of two main components:

1. **Frontend**: Located in `frontend` directory
   - React.js with Material-UI
   - Firebase authentication
   - Connection to backend API

2. **Backend API**: Located in `resume-matcher-api` directory
   - Express.js server
   - MongoDB database integration
   - OpenAI API integration

## Production Configuration

This repository contains the production-ready code with configuration for the deployed application. The frontend is configured to use the Firebase Functions backend API at:
```
https://us-central1-se11-cf96b.cloudfunctions.net/api
```

## Local Development Setup

For local development, follow these steps:

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd resume-matcher-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   MONGODB_URI=mongodb+srv://your_mongodb_username:your_mongodb_password@cluster0.mongodb.net/resumeFit?retryWrites=true&w=majority
   PORT=5005
   OPENAI_API_KEY=your_openai_api_key
   ```
   Replace the MongoDB URI and OpenAI API key with your actual credentials.

4. Start the backend server:
   ```
   npm start
   ```
   The server will run at http://localhost:5005

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with required environment variables.
   For local development, you might want to override the API URL to point to your local backend:
   ```
   REACT_APP_API_URL=http://localhost:5005/api
   ```

4. Start the frontend development server:
   ```
   npm start
   ```
   The app will run at http://localhost:3000


## Deployment

The application is already deployed using:
- Firebase Hosting for the frontend
- Firebase Functions for the backend API
- MongoDB Atlas for the database

## Security Note

This repository is configured for production use. When using for development:
- Do not commit sensitive API keys or credentials to the repository
- Use environment variables for all sensitive information
- Ensure proper authentication and authorization are in place

## Browser Compatibility

The application has been tested and works with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Support and Issues

For any issues or questions, please contact the repository owner or create an issue in the GitHub repository.
