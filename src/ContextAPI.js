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

export const OrdertotalContext = createContext();
export const OrdertotalProvider = ({ children }) =>{
  const [userOrdertotal, setUserOrdertotal] = useState(0);

  return(
    <OrdertotalContext.Provider value={{userOrdertotal, setUserOrdertotal}}>
      {children}
    </OrdertotalContext.Provider>
  )
}

export const SearchdataContext = createContext();
export const SearchdataProvider = ({ children }) => {
  const [Searchdata, setSearchdata] = useState([]);

  return (
    <SearchdataContext.Provider value={{ Searchdata, setSearchdata }}>
      {children}
    </SearchdataContext.Provider>
  );
};

export const Cart_MerContext = createContext();
export const Cart_MerProvider = ({ children }) => {
  const [Cart_Mer, setCart_Mer] = useState({});

  return (
    <Cart_MerContext.Provider value={{ Cart_Mer, setCart_Mer }}>
      {children}
    </Cart_MerContext.Provider>
  );
};



