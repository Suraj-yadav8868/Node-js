# 🐦 Twitter Clone – Full Stack Tweet App

A **Twitter-like full stack application** where users can post tweets, like them, edit, and delete their own tweets. This project is built for **learning real-world React + Node.js CRUD concepts** with clean UI and proper data flow.

---

## 🚀 Live Features

✅ Create Tweet (POST)
✅ View All Tweets (GET)
✅ Edit Tweet (PUT)
✅ Delete Tweet (DELETE)
✅ Like / Unlike Tweet
✅ Same Profile Photo Everywhere
✅ Twitter-style UI Layout

---

## 🛠️ Tech Stack

### Frontend

* ⚛️ React (Vite)
* 🎨 CSS (Twitter-style UI)
* 🔁 useState & props
* 🌐 Fetch API

### Backend

* 🟢 Node.js
* 🚀 Express.js
* 🔄 CORS
* 📦 In-memory data (array – fake DB)

---

## 📁 Project Structure

```bash
Twitter-Clone/
│
├── backend/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Feed.jsx
│   │   │   ├── TweetBox.jsx
│   │   │   ├── TweetCard.jsx
│   │   │   └── Trends.jsx
│   │   │
│   │   ├── utils/
│   │   │   └── user.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── index.css
│
└── README.md
```

---

## 👤 Current User Logic

We use **one single user object** to keep profile data consistent everywhere.

📁 `src/utils/user.js`

```js
export const currentUser = {
  username: "Suraj",
  handle: "@suraj",
  avatar: "https://i.pravatar.cc/150?img=11",
};
```

➡️ This ensures:

* Same profile photo in TweetBox
* Same profile photo in TweetCard
* Easy future login integration

---

## 🧩 Frontend Logic Explained

### 📝 TweetBox (Create Tweet)

* User types tweet
* Clicks **Tweet** button
* Calls `onTweet(text)`
* Clears textarea after posting

```js
onClick → addTweet(text)
```

---

### 📰 Feed (State Management)

Feed handles **all CRUD logic**.

```js
const [tweets, setTweets] = useState([]);
```

#### ➕ Create Tweet

```js
setTweets(prev => [newTweet, ...prev]);
```

#### ✏️ Edit Tweet

```js
setTweets(prev => prev.map(...));
```

#### ❌ Delete Tweet

```js
setTweets(prev => prev.filter(...));
```

#### ❤️ Like Tweet

```js
likes +1 / -1
```

---

### 🧱 TweetCard (Single Tweet)

Each tweet shows:

* Profile image
* Username & handle
* Tweet text
* Like button
* Edit button
* Delete button

Only UI – **logic comes from Feed**.

---

## 🔙 Backend API Explained

### Base URL

```
http://localhost:5000
```

---

### 🧪 Routes

#### 🔹 Test Server

```http
GET /
```

#### 🟢 Create Tweet

```http
POST /tweet
```

```json
{ "text": "Hello Twitter" }
```

#### 📄 Get All Tweets

```http
GET /tweets
```

#### ❤️ Like Tweet

```http
POST /like/:id
```

#### ✏️ Edit Tweet

```http
PUT /tweet/:id
```

#### ❌ Delete Tweet

```http
DELETE /tweet/:id
```

---

## ⚙️ How to Run Project

### 🔹 Backend

```bash
cd backend
npm install
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

### 🔹 Frontend

```bash
cd frontend
npm install
npm run dev
```

App runs on:

```
http://localhost:5173
```

---

## 🎯 Learning Outcomes

✅ React component structure
✅ Props & state flow
✅ CRUD operations
✅ Backend–Frontend connection
✅ Real-world Twitter-style architecture

---

## 🚧 Future Improvements

* 🔐 Login & Authentication
* 🗄️ MongoDB integration
* 🕒 Tweet timestamps
* 🌙 Dark mode
* 📱 Mobile responsiveness

---

## video

# https://drive.google.com/file/d/1BshHa0KjZ5xuXpOdqkDzB4B6AO_LTOLV/view?usp=sharing


## 👨‍💻 Author

**Suraj Yadav**
Learning Full Stack Development 🚀

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🔁 Share with friends
* 💬 Keep learning & building

Happy Coding 💙
