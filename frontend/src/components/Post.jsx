import PostFooter from "./PostFooter";

const Post = ({ post }) => {
  return (
    <div className="post">
      <p className="name">{post.userName}</p>
      <p className="date">{post.date}</p>
      <p className="message">{post.message}</p>
      <PostFooter post={post} />
    </div>
  );
};

export default Post;
