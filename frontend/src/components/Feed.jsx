import { useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import DataContext from "../context/DataContext";
import Post from "./Post";

const Feed = () => {
  const { posts, setPosts, postURL, auth, data, setData } =
    useContext(DataContext);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await axios.get(`${postURL}`, {
          headers: {
            authorization: auth.accessToken,
          },
        });
        setData(response.data);
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchAllPosts("get");
  }, [posts, setPosts, setData, postURL, auth.accessToken]);

  return (
    <section className="feed">
      {data.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </section>
  );
};

export default Feed;
