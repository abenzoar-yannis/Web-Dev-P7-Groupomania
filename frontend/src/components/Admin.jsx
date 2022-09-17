import { useEffect, useContext } from "react";
import axios from "axios";
import DataContext from "../context/DataContext";

const Admin = () => {
  const { users, setUsers, authURL, auth } = useContext(DataContext);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get(`${authURL}/users`, {
          headers: {
            authorization: auth.accessToken,
          },
        });
        setUsers(response.data);
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

    fetchAllUsers("get");
  }, [setUsers, authURL, auth.accessToken]);

  const deleteAUser = async (id) => {
    try {
      await axios.delete(`${authURL}/user/${id}`, {
        headers: {
          authorization: auth.accessToken,
        },
      });
      const usersList = users.filter((user) => user._id !== id);
      setUsers(usersList);
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
    <main className="groupomania-main">
      <section className="feed-header">
        <h2>Administration</h2>
      </section>

      <section className="feed">
        {users.map((user) => (
          <div key={user._id}>
            <p>{user._id}</p>
            <p>{user.name}</p>
            <p>{user.role}</p>
            <div className="post-footer">
              <button onClick={() => deleteAUser(user._id)}>Supprimer</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Admin;
