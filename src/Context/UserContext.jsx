import { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const user = localStorage.getItem("user");
  const setUser = (value) => {
    localStorage.setItem("user", value);
  };

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
