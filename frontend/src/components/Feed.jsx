import { useEffect, useContext } from "react";
import DataContext from "../context/DataContext";
import fetchAllPosts from "../utils/fetchAllPosts";
import Post from "./Post";

const Feed = () => {
  const { posts, setPosts, postURL, auth, data, setData } =
    useContext(DataContext);

  useEffect(() => {
    fetchAllPosts(postURL, auth, setData, setPosts);
  }, [posts, setPosts, setData, postURL, auth]);

  return (
    <section className="feed">
      {data.reverse().map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </section>
  );
};

export default Feed;
