import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
  const res = await axios.get("http://localhost:5000/posts");
  dispatch({ type: "FETCH_POSTS", payload: res.data });
};

export const addPost = (post) => async (dispatch) => {
  const res = await axios.post("http://localhost:5000/posts", post);
  dispatch({ type: "ADD_POST", payload: res.data });
};

export const deletePost = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/posts/${id}`);
  dispatch({ type: "DELETE_POST", payload: id });
};

export const updatePost = (id, post) => async (dispatch) => {
  await axios.put(`http://localhost:5000/posts/${id}`, post);
  dispatch(fetchPosts());
};
