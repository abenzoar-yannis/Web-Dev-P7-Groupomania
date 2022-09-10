

const Post = ({ post }) => {
  return (
    <div className="post">
      <p className="email">{post.userId}</p>
      <p className="date">{post.date}</p>
      <p className="message">
        {post.message}
      </p>
    </div>
    );
};

export default Post;
