import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from "@/services/api";

interface userProps {
  id: string
  google_id?: string
  email: string
  password?: string
  name: string
  picture?: string
  refresh_token?: string
}

interface IUserContextProps {
  user: userProps[];
}

interface AuthProvider {
  children: ReactNode;
}

export const AuthContext = createContext({} as IUserContextProps);

export const AuthContextProvider = ({ children }: AuthProvider) => {

  const [user, setUser] = useState<userProps[]>([])

  useEffect(() => {
    setUser([{
      id: "178",
      google_id: "asdasdasdw3q",
      email: "jhoownogueira@outlook.com",
      password: "uasaushaushu",
      name: "Jhonata Nogueira",
      picture: "suahsuashu",
      refresh_token: "asdaosdkasod"
    }])
  }, [])

  // useEffect(() => {
  //     api.get('/pokemon?limit=21&offset=0').then(response => {
  //         setPokemonsList(response.data.results)
  //     })
  // }, [])

  return (
    <AuthContext.Provider
      value={{
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};