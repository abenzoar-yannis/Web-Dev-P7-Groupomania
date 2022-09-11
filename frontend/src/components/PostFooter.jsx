import DataContext from "../context/DataContext";
import { useContext } from "react";
import axios from "axios";

const PostFooter = ({ post, postId }) => {
  const { posts, setPosts, auth, ROLES, postURL } = useContext(DataContext);

  const deleteAPost = async (id) => {
    try {
      await axios.delete(`${postURL}/${id}`, {
        headers: {
          authorization: auth.accessToken,
        },
      });
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
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
    <div className="post-footer">
      <div>
        <button>Like</button>
        <button>Dislike</button>
      </div>
      <div>
        {auth.userId === post.userId ? <button>Modifier</button> : null}

        {auth.role === ROLES.Admin || auth.userId === post.userId ? (
          <button onClick={() => deleteAPost(postId)}>Supprimer</button>
        ) : null}
      </div>
    </div>
  );
};

export default PostFooter;
