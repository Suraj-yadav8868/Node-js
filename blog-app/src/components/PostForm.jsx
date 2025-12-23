import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions/postActions";
import "./PostForm.css";


const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const submitHandler = () => {
    if (!title || !description) {
      alert("Title and Description required");
      return;
    }

    dispatch(addPost({
      title,
      description,
      date: new Date().toISOString(),
      category: "Tech",
      image: "https://via.placeholder.com/300",
    }));
  };

 return (
  <div className="post-form-container">
    <input
      onChange={e => setTitle(e.target.value)}
      placeholder="Title"
    />

    <input
      onChange={e => setDescription(e.target.value)}
      placeholder="Description"
    />

    <button onClick={submitHandler}>Add Post</button>
  </div>
);

    
  ;
};

export default PostForm;
