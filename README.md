# Quiz Generator Web App

This is a web application that generates quizzes based on text documents using OpenAI's GPT. Users can input a document, generate a quiz with yes/no questions, answer the quiz, and receive a score.

## Tech Stack

- **Frontend**: React.js, TailwindCSS
- **Backend**: Node.js, Nest.js
- **LLM**: OpenAI (GPT)

## Features

1. **Document Input**: Users can paste in a document (5-20 pages) as text.
2. **Quiz Generation**: The app generates 5 yes/no questions based on the document's content.
3. **Answer and Scoring**: Users can answer the quiz and receive a score based on their answers.

## Prerequisites

- Node.js (v14+)
- npm or yarn

## Setup

1. **Clone the Repository**:

   Clone the project repository from GitHub and navigate to the project directory.

2. **Install Dependencies**:

   - For the backend: Install the required dependencies by navigating to the backend directory.
   - For the frontend: Install the required dependencies by navigating to the frontend directory.

3. **Configure Environment Variables**:

   Create a `.env` file in the backend directory and set the `OPENAI_API_KEY` with your OpenAI API key.

4. **Running the Application**:

   - Start the backend server from the backend directory.
   - Start the frontend application from the frontend directory.

5. **Access the Application**:

   Open your browser and go to the local URL where the frontend is running to use the application.

## Future Improvements

- Implement more sophisticated scoring logic to provide detailed feedback.
- Add user authentication and the ability to save and review past quiz results.
- Improve the user interface and user experience with additional design features and feedback messages.
- Expand support for larger and more complex documents.
