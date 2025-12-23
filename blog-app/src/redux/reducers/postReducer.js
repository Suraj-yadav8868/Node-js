// redux/reducers/postReducer.js
const initialState = {
  posts: [],
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return { ...state, posts: action.payload };
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.payload] };
    case "DELETE_POST":
      return { ...state, posts: state.posts.filter(p => p.id !== action.payload) };
    default:
      return state;
  }
}
