import { useEffect, useContext } from "react";
import axios from "axios";
import DataContext from "../context/DataContext";
import axiosError from "../utils/axiosError";

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
        axiosError(err);
      }
    };

    fetchAllUsers();
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
      axiosError(err);
    }
  };

  return (
    <main className="groupomania-main">
      <section className="administration-header">
        <h2>Administration</h2>
      </section>

      <section className="administration-feed">
        <table>
          <thead>
            <tr>
              <th colSpan={3}>Utilisateurs</th>
            </tr>
            <tr>
              <td className="name-column">Nom</td>
              <td className="role-column">Rôle</td>
              <td className="empty-column"></td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="name-column">{user.name}</td>
                <td className="role-column">{user.role}</td>
                <td className="empty-column">
                  <button onClick={() => deleteAUser(user._id)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Admin;
