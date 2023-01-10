import React, { createContext, useContext, useState } from 'react';
const ReactFormContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const setValues = values => {
    setData(prevData => ({
      ...prevData,
      ...values,
    }));
  };
  return (
    <ReactFormContext.Provider value={{ data, setValues }}>
      {children}
    </ReactFormContext.Provider>
  );
};
export const useData = () => {
  useContext(ReactFormContext);
};
