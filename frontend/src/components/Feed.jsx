import { useEffect, useContext } from "react";
import DataContext from "../context/DataContext";
import fetchAllPosts from "../utils/fetchAllPosts";
import Post from "./Post";

const Feed = () => {
  const { postURL, auth, setData, posts, setPosts } = useContext(DataContext);

  useEffect(() => {
    fetchAllPosts(postURL, auth, setData, setPosts);
  }, [setPosts]);

  return (
    <section className="feed">
      {posts.length ? (
        posts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <p style={{ marginTop: "2rem" }}>No posts to display.</p>
      )}

      {/* {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))} */}
    </section>
  );
};

export default Feed;
