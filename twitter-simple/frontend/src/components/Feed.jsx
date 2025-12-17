import { useEffect, useState } from "react";
import TweetBox from "./TweetBox";
import TweetCard from "./TweetCard";
import { currentUser } from "../utils/user";
import "./Feed.css";

export default function Feed() {
  const [tweets, setTweets] = useState([]);

  // READ
  useEffect(() => {
    fetch("http://localhost:5000/api/tweets")
      .then((res) => res.json())
      .then((data) => setTweets(data))
      .catch((err) => console.error(err));
  }, []);

  // CREATE
  const addTweet = async (text) => {
    if (!text.trim()) return;

    const res = await fetch("http://localhost:5000/api/tweets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: text }),
    });

    const newTweet = await res.json();

    newTweet.username = currentUser.username;
    newTweet.handle = currentUser.handle;
    newTweet.avatar = currentUser.avatar;

    setTweets((prev) => [newTweet, ...prev]);
  };

  // DELETE
  const deleteTweet = async (id) => {
    await fetch(`http://localhost:5000/api/tweets/${id}`, {
      method: "DELETE",
    });

    setTweets((prev) => prev.filter((t) => t.id !== id));
  };

  // LIKE
  const toggleLike = async (id) => {
    const res = await fetch(
      `http://localhost:5000/api/tweets/${id}/like`,
      { method: "POST" }
    );

    const updated = await res.json();

    setTweets((prev) =>
      prev.map((t) => (t.id === id ? updated : t))
    );
  };

  // EDIT
  const editTweet = async (id, text) => {
    const res = await fetch(
      `http://localhost:5000/api/tweets/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: text }),
      }
    );

    const updated = await res.json();

    setTweets((prev) =>
      prev.map((t) => (t.id === id ? updated : t))
    );
  };

  return (
    <div className="feed">
      <h2 style={{ padding: "15px" }}>Home</h2>
      <TweetBox onTweet={addTweet} />

      {tweets.map((tweet) => (
        <TweetCard
          key={tweet.id}
          tweet={tweet}
          onDelete={deleteTweet}
          onLike={toggleLike}
          onEdit={editTweet}
        />
      ))}
    </div>
  );
}
