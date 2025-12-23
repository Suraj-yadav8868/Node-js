import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => (
  <nav>
    <Link to="/">Posts</Link> | 
    <Link to="/add">Add Post</Link> | 
    <Link to="/login">Login</Link>
  </nav>
);

export default Navbar;
