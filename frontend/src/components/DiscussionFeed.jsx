import Feed from "./Feed";
import { Outlet } from "react-router-dom";

const DiscussionFeed = () => {
  return (
    <main className="groupomania-main">
      <section className="feed-header">
        <h2>DISCUSSION</h2>
      </section>

      <Feed />
      <Outlet />
    </main>
  );
};

export default DiscussionFeed;
