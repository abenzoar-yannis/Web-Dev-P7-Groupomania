import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import DataContext from "../context/DataContext";
import axios from "axios";

const PostUpdate = () => {
  const { id } = useParams();
  const { posts, setPosts, auth, postURL, navigate } = useContext(DataContext);
  const post = posts.find((post) => post._id === id);
  const [editMessage, setEditMessage] = useState("");

  useEffect(() => {
    setEditMessage(post.message);
  }, [post]);

  const editPost = async (id) => {
    const updatedPost = { message: editMessage };
    try {
      const response = await axios.put(`${postURL}/${id}`, updatedPost, {
        headers: {
          authorization: auth.accessToken,
        },
      });
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditMessage("");
      navigate("/groupomania");
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
      {editMessage && (
        <>
          <form className="feed-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="message">Message à éditer :</label>
            <div>
              <textarea
                id="message"
                required
                value={editMessage}
                onChange={(e) => setEditMessage(e.target.value)}
              />
              {/* setEditMessage(e.target.value) */}
              <div>
                <button type="submit" onClick={() => editPost(post._id)}>
                  Modifier
                </button>
                <p>
                  <Link to="/groupomania">Annuler</Link>
                </p>
              </div>
            </div>
          </form>
        </>
      )}
      {!editMessage && (
        <>
          <h2>Message non trouvé</h2>
          <p>c'est un peu problématique</p>
          <p>
            <Link to="/groupomania">Retour au fil de discussion</Link>
          </p>
        </>
      )}
    </section>
  );
};

export default PostUpdate;
