import { useState } from "react";
import "./TweetCard.css";

export default function TweetCard({ tweet, onDelete, onLike, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(tweet.content);

  const saveEdit = () => {
    onEdit(tweet.id, text);
    setIsEditing(false);
  };

  return (
    <div className="tweetCard">
      <img src={tweet.avatar
} className="avatar" />

      <div className="tweetBody">
        <div className="tweetHeader">
          <strong>{tweet.username}</strong>
          <span>{tweet.handle} · {tweet.time}</span>
        </div>

        {isEditing ? (
          <>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={saveEdit}>Save</button>
          </>
        ) : (
          <p>{tweet.content}</p>
        )}

       <div className="tweetActions">
  <button className={`like ${tweet.liked ? "liked" : ""}`}
          onClick={() => onLike(tweet.id)}>
    ❤️ <span>{tweet.likes}</span>
  </button>

  <button className="edit" onClick={() => setIsEditing(!isEditing)}>
    ✏️
  </button>

  <button className="delete" onClick={() => onDelete(tweet.id)}>
    🗑
  </button>
</div>

      </div>
    </div>
  );
}
