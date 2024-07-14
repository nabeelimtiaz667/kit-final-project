import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUserSession] = useState(localStorage.getItem("user"));
  const setUser = (value) => {
    localStorage.setItem("user", value);
    setUserSession(value);
  };

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
