import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Login from "./pages/Login.jsx";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
  <Route path="/" element={<PostList />} />
  <Route path="/add" element={<PostForm />} />
  <Route path="/login" element={<Login />} />
</Routes>

    </BrowserRouter>
  );
}

export default App;
