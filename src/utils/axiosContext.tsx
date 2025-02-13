import React, { createContext, useContext } from 'react';
import axiosInstance from './axiosConfig';

const AxiosContext = createContext(axiosInstance);

export const AxiosProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => {
  return useContext(AxiosContext);
};