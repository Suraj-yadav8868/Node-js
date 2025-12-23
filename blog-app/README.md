📝 React Blog App (Practical Exam Project)

A modern Blog Application built using React, Redux, Redux Thunk, React Router, Bootstrap, and JSON Server.
This project demonstrates full CRUD operations, state management, routing, and basic authentication.

🚀 Features

📄 View all blog posts

➕ Add new blog posts

✏️ Update existing posts

❌ Delete blog posts

🖼️ Image support with fallback handling

🔐 Login authentication

🔒 Protected routes using PrivateRoute

🎨 Responsive UI using Bootstrap & custom CSS

📦 JSON Server used as a fake REST API backend

🛠️ Tech Stack

Frontend: React JS

State Management: Redux, React-Redux, Redux Thunk

Routing: React Router DOM

Styling: Bootstrap, Custom CSS

Backend (Mock): JSON Server

Build Tool: Vite / Create React App

📂 Project Structure
blog-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── PostList.jsx
│   │   ├── PostDetails.jsx
│   │   ├── PostForm.jsx
│   │   └── PrivateRoute.jsx
│   │
│   ├── pages/
│   │   └── Login.jsx
│   │
│   ├── redux/
│   │   ├── actions/
│   │   │   ├── postActions.js
│   │   │   └── authActions.js
│   │   ├── reducers/
│   │   │   ├── postReducer.js
│   │   │   └── authReducer.js
│   │   └── store.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── db.json
├── package.json
└── README.md

🔧 Installation & Setup
1️⃣ Clone the repository
git clone <repository-url>
cd blog-app

2️⃣ Install dependencies
npm install

3️⃣ Start JSON Server
npx json-server --watch db.json --port 5000

4️⃣ Start React App
npm run dev

🌐 API Endpoints (JSON Server)
Method	Endpoint	Description
GET	/posts	Fetch all posts
POST	/posts	Add new post
PUT	/posts/:id	Update post
DELETE	/posts/:id	Delete post
🔐 Authentication

Simple login authentication implemented

Only logged-in users can:

Add posts

Edit posts

Delete posts

Route protection handled using PrivateRoute

🎨 UI & Styling

Bootstrap used for layout and responsiveness

Custom CSS for:

Navbar

Post cards

Forms

Card-based blog layout with hover effects

Fallback image handling for broken images

📝 Exam Explanation (Short)

This project is a React-based Blog Application using Redux for state management and JSON Server as a mock backend. It supports CRUD operations, authentication, protected routes, and responsive UI using Bootstrap.

🚧 Future Improvements

🧾 Single blog details page

🏷️ Category filtering

📅 Sort posts by date

❤️ Like / popularity feature

🌙 Dark mode

🤝 Contributing

Contributions are welcome!
Feel free to fork this repository and submit a pull request.

📜 License

This project is created for educational and practical exam purposes.
