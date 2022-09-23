import Feed from "./Feed";
import { Outlet } from "react-router-dom";

const Thread = () => {
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

export default Thread;
