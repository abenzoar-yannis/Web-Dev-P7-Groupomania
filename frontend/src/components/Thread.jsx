import Feed from "./Feed";
import NewPost from "./NewPost";

const Thread = () => {
  return (
    <main className="groupomania-main">
      <section className="feed-header">
        <h2>DISCUSSION</h2>
      </section>

      <Feed />
      <NewPost />
    </main>
  );
};

export default Thread;
