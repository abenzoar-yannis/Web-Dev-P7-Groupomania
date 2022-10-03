import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import axios from "axios";
import axiosError from "../utils/axiosError";

import {
  FaThumbsDown,
  FaThumbsUp,
  FaRegThumbsDown,
  FaRegThumbsUp,
} from "react-icons/fa";

const PostFooter = ({ post }) => {
  const { auth, ROLES, postURL } = useContext(DataContext);

  const [like, setLike] = useState(0);
  useEffect(() => {
    if (
      post.usersLiked.find((user) => user === auth.userId) === undefined &&
      post.usersDisliked.find((user) => user === auth.userId) === undefined
    ) {
      setLike(0);
      console.log("useEffect a set Like sur 0");
    }
    if (
      post.usersDisliked.find((user) => user === auth.userId) === auth.userId
    ) {
      setLike(-1);
      console.log("useEffect a set Like sur -1");
    }
    if (post.usersLiked.find((user) => user === auth.userId) === auth.userId) {
      setLike(1);
      console.log("useEffect a set Like sur 1");
    }
  }, []);

  const likePost = async (id, newIndex) => {
    let updatedPost;
    const userId = JSON.parse(sessionStorage.getItem("groupomaniaId")).userId;

    updatedPost = { userId: userId, like: newIndex };
    console.log(updatedPost);

    try {
      const response = await axios.put(`${postURL}/${id}/like`, updatedPost, {
        headers: {
          authorization: auth.accessToken,
        },
      });
      console.log(response.data);
    } catch (err) {
      axiosError(err);
    }
  };

  const newLike = () => {
    if (like === 0) {
      setLike(1);
      likePost(post._id, 1);
      console.log("Like c'est set sur 1");
    } else if (like === 1) {
      setLike(0);
      likePost(post._id, 0);
      console.log("Like c'est set sur 0");
    } else {
      console.log("Retirer votre dislike avant de like");
    }
  };

  const newDislike = () => {
    if (like === 0) {
      setLike(-1);
      likePost(post._id, -1);
      console.log("Like c'est set sur -1");
    } else if (like === -1) {
      setLike(0);
      likePost(post._id, 0);
      console.log("Like c'est set sur 0");
    } else {
      console.log("Retirer votre dislike avant de like");
    }
  };

  return (
    <div className="post-footer">
      <div
        style={{
          width: "75px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div>
          {like === 1 ? (
            <FaThumbsUp fill="blue" onClick={newLike} />
          ) : (
            <FaRegThumbsUp onClick={newLike} />
          )}

          {post.likes}
        </div>
        <div>
          {like === -1 ? (
            <FaThumbsDown fill="blue" onClick={newDislike} />
          ) : (
            <FaRegThumbsDown onClick={newDislike} />
          )}

          {post.dislikes}
        </div>
      </div>

      <div>
        {auth.role === ROLES.Admin || auth.userId === post.userId ? (
          <button className="modifie-button">
            <Link to={`/groupomania/${post._id}`}>Modifier</Link>
          </button>
        ) : null}

        {auth.role === ROLES.Admin || auth.userId === post.userId ? (
          <button>
            <Link to={`/groupomania/delete/${post._id}`}>Supprimer</Link>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default PostFooter;
