import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// fake DB (in-memory)
let tweets = [];

// =========================
// GET ALL TWEETS (READ)
// =========================
app.get("/api/tweets", (req, res) => {
  res.json(tweets);
});

// =========================
// CREATE TWEET
// =========================
app.post("/api/tweets", (req, res) => {
  const newTweet = {
    id: Date.now(),
    content: req.body.content,
    likes: 0,
    liked: false,
    username: "Suraj",
    handle: "@suraj",
    avatar: "https://i.pravatar.cc/150?img=11",
    time: "now",
  };

  tweets.unshift(newTweet);
  res.json(newTweet);
});

// =========================
// DELETE TWEET
// =========================
app.delete("/api/tweets/:id", (req, res) => {
  const id = Number(req.params.id);
  tweets = tweets.filter((t) => t.id !== id);
  res.json({ success: true });
});

// =========================
// EDIT / UPDATE TWEET
// =========================
app.put("/api/tweets/:id", (req, res) => {
  const id = Number(req.params.id);

  tweets = tweets.map((t) =>
    t.id === id ? { ...t, content: req.body.content } : t
  );

  const updated = tweets.find((t) => t.id === id);
  res.json(updated);
});

// =========================
// LIKE / UNLIKE
// =========================
app.post("/api/tweets/:id/like", (req, res) => {
  const id = Number(req.params.id);

  tweets = tweets.map((t) =>
    t.id === id
      ? {
          ...t,
          liked: !t.liked,
          likes: t.liked ? t.likes - 1 : t.likes + 1,
        }
      : t
  );

  const updated = tweets.find((t) => t.id === id);
  res.json(updated);
});

app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
