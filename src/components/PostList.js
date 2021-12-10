import { useSelector } from "react-redux";
import CreatePost from "./CreatePost";
import Post from "./Post";

export default function PostList() {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="posts-wrapper">
      <CreatePost />
      <div className="posts-list">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </div>
  );
}
