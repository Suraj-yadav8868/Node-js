import { useDispatch } from "react-redux";
import { deletePost } from "../redux/actions/postActions";
import "./PostDetails.css";




const PostDetails = ({ post }) => {
  const dispatch = useDispatch();

  return (
   <div className="col-md-4 col-sm-6 mb-4">
  <div className="card post-card h-100">
    <img
      src={post.image || "https://www.blogtyrant.com/wp-content/uploads/2016/06/bestof.png"}
      onError={(e) =>
        (e.target.src =
          "https://www.blogtyrant.com/wp-content/uploads/2016/06/bestof.png")
      }
      className="card-img-top"
    />

    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">{post.description}</p>

      <button
        className="btn btn-danger mt-auto"
        onClick={() => dispatch(deletePost(post.id))}
      >
        Delete
      </button>
    </div>
  </div>
</div>


  );
};

export default PostDetails;
