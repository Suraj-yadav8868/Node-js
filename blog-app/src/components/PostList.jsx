import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/postActions";
import PostDetails from "./PostDetails";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">All Blog Posts</h2>

      <div className="row">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostDetails key={post.id} post={post} />
          ))
        ) : (
          <p className="text-center">No posts available</p>
        )}
      </div>
    </div>
  );
};

export default PostList;
