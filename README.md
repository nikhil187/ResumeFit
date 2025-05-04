# ResumeFit

ResumeFit is a comprehensive application that helps job seekers match their resumes with job descriptions, providing detailed feedback on skill matches, generating quiz questions, and offering insights to improve job compatibility.

## Features

- Resume analysis against job descriptions
- Interactive quizzes to test relevant skills
- Detailed match analysis with visual charts
- Interview question generation
- User authentication with email verification
- MongoDB integration for storing analysis reports

## Project Structure

The project consists of three main components:

1. **Frontend**: React application
2. **Backend**: Express.js API
3. **Firebase Functions**: Serverless backend with MongoDB connection

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/nikhil187/ResumeFit.git
   cd ResumeFit
   ```

2. Install dependencies for each component:
   ```
   # Root dependencies
   npm install

   # Frontend dependencies
   cd frontend
   npm install

   # Backend dependencies
   cd ../resume-matcher-backend
   npm install

   # Functions dependencies
   cd ../functions
   npm install
   ```

3. Create environment files:
   - Create `.env` files in the root, frontend, backend, and functions directories
   - Use the `.env.example` files as templates

4. Start the development servers:
   ```
   # Start frontend
   cd frontend
   npm start

   # Start backend
   cd ../resume-matcher-backend
   npm start

   # Start Firebase Functions locally
   cd ../functions
   npm run serve
   ```

## Technologies Used

- React.js with Material-UI
- Node.js with Express
- Firebase (Authentication, Functions, Hosting)
- MongoDB
- OpenAI API

## Contact

For any questions or feedback, please contact the repository owner.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 