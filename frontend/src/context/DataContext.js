import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [succesMessage, setSuccesMessage] = useState("");
  const [auth, setAuth] = useState({})

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  
const ROLES = {
  User: "user",
  Admin: "admin"
};

  const authURL = "http://localhost:3000/api/auth";
  const postURL = "http://localhost:3000/api/post";

  return (
    <DataContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        posts,
        setPosts,
        errorMessage,
        setErrorMessage,
        succesMessage,
        setSuccesMessage,
        auth,
        setAuth,
        authURL,
        postURL,
        ROLES,
        navigate
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
