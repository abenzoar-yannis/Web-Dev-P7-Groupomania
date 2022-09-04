import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [succesMessage, setSuccesMessage] = useState("");
  const navigate = useNavigate();

  const authURL = "http://localhost:3000/api/auth";

  return (
    <DataContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        errorMessage,
        setErrorMessage,
        succesMessage,
        setSuccesMessage,
        authURL,
        navigate
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
