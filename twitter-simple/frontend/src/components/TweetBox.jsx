import { useState } from "react";
import "./TweetBox.css";
import { currentUser } from "../utils/user";

<img
  className="avatar"
  src={currentUser.avatar}
  alt="user"
/>


export default function TweetBox({ onTweet }) {
  const [text, setText] = useState("");

  const handleTweet = () => {
    onTweet(text);
    setText("");
  };

  return (
    <div className="tweetBox">
      <img
        className="avatar"
        src="https://i.pravatar.cc/150?img=3"
        alt="user"
      />

      <div className="tweetBox-input">
        <textarea
          placeholder="What's happening?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="tweetBox-actions">
          <button onClick={handleTweet}>Tweet</button>
        </div>
      </div>
    </div>
  );
}
