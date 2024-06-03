import React, { createContext, useState } from 'react';

// 创建一个Context对象
export const LoginContext = createContext();
export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(0);

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const AccountContext = createContext();
export const AccountProvider = ({ children }) =>{
  const [userAccount, setUserAccount] = useState("");

  return(
    <AccountContext.Provider value={{userAccount, setUserAccount}}>
      {children}
    </AccountContext.Provider>
  )
}
