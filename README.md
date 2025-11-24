<h1>Project Title & Description</h1>
This project was bootstrapped with Vite + React.
A simple and modern Login Application with:
Login form with validation using Formik & Yup
Email & password authentication from JSON Server
Video background & glassmorphism UI
Alerts for successful or failed login

<h1>Available Scripts</h1>
n the project directory, you can run:

npm install

Installs all dependencies.

npm run dev

Runs the app in development mode.
Open http://localhost:5173
 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test

Launches the test runner in interactive watch mode.

npm run build

Builds the app for production to the dist folder.
Correctly bundles React in production mode and optimizes for best performance.

The build is minified and filenames include hashes.
Your app is ready to be deployed.

npm run preview

Locally preview the production build before deploying

<h2>JSON Server</h2>
The project uses JSON Server to simulate a backend API.
Make sure db.json exists in the project root with user.
{
  "users": [
    { "id": 1, "email": "test@example.com", "password": "123456" }
  ]
}
<h3>Run JSON Server</h3>
json-server --watch db.json --port 3000

API endpoint: http://localhost:3000/users

<h2>Project Structure</h2>
login-app/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── component/
│   │   └── Login.jsx
        └── Login.css
│   ├── assets/
│      └── video.mp4
│   
│
├── db.json
├── package.json
└── README.md

Developer:
Fedaa Mohammed ✨


