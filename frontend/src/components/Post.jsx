import PostFooter from "./PostFooter";

const Post = ({ post, postId }) => {
  return (
    <div className="post">
      <p className="email">{post.userId}</p>
      <p className="date">{post.date}</p>
      <p className="message">{post.message}</p>
      <PostFooter post={post} postId={postId} />
    </div>
  );
};

export default Post;
