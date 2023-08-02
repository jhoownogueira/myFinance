import React, { createContext, ReactNode, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { api } from "@/services/api";
import Cookies from 'js-cookie';
import router from 'next/router';

interface userProps {
  id: number;
  name: string;
  email: string;
  picture: string;
  created_at: string;
}

interface IUserContextProps {
  user: userProps | undefined;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  refreshUser: () => Promise<boolean>;
}

interface AuthProvider {
  children: ReactNode;
}

export const AuthContext = createContext({} as IUserContextProps);

export const AuthContextProvider = ({ children }: AuthProvider) => {
  const token = Cookies.get('token');
  const refresh_token = Cookies.get('refresh_token');
  const [user, setUser] = useState<userProps>()
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    try {
      const response = await api.post('/authenticated', { token, refresh_token });
      const { authenticated, user } = response.data;

      if (authenticated) {
        setUser(user);
        setLoading(false);
        return true;
      } else {
        setLoading(false);
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }


  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        setLoading,
        refreshUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};