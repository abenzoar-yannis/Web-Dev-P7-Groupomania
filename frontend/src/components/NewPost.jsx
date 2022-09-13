import { FiSend } from "react-icons/fi";
import { useState, useContext } from "react";
import { format } from "date-fns";
import axios from "axios";
import DataContext from "../context/DataContext";

const NewPost = () => {
  const [postMessage, setPostMessage] = useState("");
  const { posts, setPosts, auth, postURL } = useContext(DataContext);

  const newPostSubmit = async (e) => {
    e.preventDefault();

    const userId = JSON.parse(sessionStorage.getItem("groupomaniaId")).userId;
    const userName = JSON.parse(
      sessionStorage.getItem("groupomaniaId")
    ).userName;
    const date = format(new Date(), "dd/MM yyyy, h:m:ss");
    const newPost = { userId, userName, date, message: postMessage };

    try {
      const response = await axios.post(`${postURL}`, newPost, {
        headers: {
          authorization: auth.accessToken,
        },
      });
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostMessage("");
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

  return (
    <section className="feed-new-post">
      <form className="feed-new-post-form" onSubmit={newPostSubmit}>
        <label htmlFor="message">Ecrire un post</label>
        <div>
          <input
            type="text"
            id="message"
            required
            value={postMessage}
            onChange={(e) => setPostMessage(e.target.value)}
          />
          <button type="submit">
            <FiSend />
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewPost;
