import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import DataContext from "../context/DataContext";

const PostDelete = () => {
  const { posts, setPosts, auth, navigate, postURL } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post._id === id);

  const deleteAPost = async (id) => {
    try {
      const response = await axios.delete(`${postURL}/${id}`, {
        headers: {
          authorization: auth.accessToken,
        },
      });
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      console.log(response.data);
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
    <main className="groupomania-main">
      <section className="feed-header">
        <h2>Suppression de Post</h2>
      </section>

      <section className="feed">
        <p>Etes vous sur de vouloir supprimer le message :</p>
        <p>
          {post.message.length <= 25
            ? post.message
            : `${post.message.slice(0, 25)}...`}
        </p>
        {post.imageUrl ? (
          <p>Et son image {post.imageUrl.split("images/")[1]}</p>
        ) : null}
        <div>
          <button
            className="delete-button"
            onClick={() => deleteAPost(post._id)}
          >
            Supprimer : {post._id}
          </button>
          <p>
            <Link to="/groupomania">Annuler</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default PostDelete;
