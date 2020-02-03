import React, { createContext, useState } from "react";

export const AppContext = createContext({
  isOpen: true,
  isMobile: true,
  previousWidth: -1,
  page: "blotter_records"
});
export const UserContext = createContext({
  loggedIn: false
});

const Store = ({ children }) => {
  const [app, setApp] = useState({
    isOpen: true,
    isMobile: true,
    previousWidth: -1,
    page: "blotter_records"
  });

  const [user, setUser] = useState({
    loggedIn: false
  });

  return (
    <AppContext.Provider value={{ app, setApp }}>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </AppContext.Provider>
  );
};

export default Store;
