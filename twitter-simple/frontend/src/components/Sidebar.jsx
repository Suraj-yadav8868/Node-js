import "./Sidebar.css";
import {
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaUser,
  FaTwitter,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">
        <FaTwitter className="logo-icon" /> TwitterHome
      </h2>

      <ul className="menu">
        <li>
          <FaHome /> <span>Home</span>
        </li>
        <li>
          <FaHashtag /> <span>Explore</span>
        </li>
        <li>
          <FaBell /> <span>Notifications</span>
        </li>
        <li>
          <FaEnvelope /> <span>Messages</span>
        </li>
        <li>
          <FaUser /> <span>Profile</span>
        </li>
      </ul>

      <button className="tweet-btn">Tweet</button>
    </div>
  );
};

export default Sidebar;
