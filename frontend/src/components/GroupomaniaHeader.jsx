import GroupomaniaNavigation from "./GroupomaniaNavigation";
import useAuth from "../hooks/useAuth";

const GroupomaniaHeader = () => {
  const { auth } = useAuth();

  return (
    <header className="groupomania-header">
      <div className="main-title">
        <h1>Groupomania</h1>
      </div>

      <div className="header-bottom">
        <div className="block-userid">
          <p>{auth.role}</p>
          <p>{auth.userName}</p>
        </div>
        <GroupomaniaNavigation />
      </div>
    </header>
  );
};

export default GroupomaniaHeader;
