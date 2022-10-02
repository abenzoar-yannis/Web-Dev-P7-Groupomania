import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

// import {
//   FaThumbsDown,
//   FaThumbsUp,
//   FaRegThumbsDown,
//   FaRegThumbsUp,
// } from "react-icons/fa";

const PostFooter = ({ post }) => {
  const { auth, ROLES } = useContext(DataContext);

  return (
    <div className="post-footer">
      {/* <div>
        <button>
          <FaThumbsUp />
          <FaRegThumbsUp />
        </button>
        <button>
          <FaThumbsDown />
          <FaRegThumbsDown />
        </button>
      </div> */}
      <div>
        <button className="modifie-button">
          <Link to={`/does-not-exist`}>does-not-exist</Link>
        </button>
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
