import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const UserContextProvider = (props) => {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const [registeredUser, setRegisteredUser] = useState(
    localUser !== null && localUser !== {}
  );
  const [user, setUser] = useState({ ...localUser });

  const logout = () => {
    setUser({});
    setRegisteredUser(false);
  };

  const login = (name, phone, email) => {
    console.log(name, phone, email);
    setUser({
      name: name,
      phone: phone,
      email: email,
    });
    setRegisteredUser(true);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user);
  }, [user, registeredUser]);

  return (
    <UserContext.Provider value={{ registeredUser, user, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
