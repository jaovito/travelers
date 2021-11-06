import React, { useCallback } from 'react'
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


type UserContextProps = {
  name: string | null;
  loading: boolean;
  setUserName: (userName: string) => void;
}

const UserContext = createContext({} as UserContextProps);

type UserProviderProps = {
  children: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  const [name, setName] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    (async () => {
      const userName = await AsyncStorage.getItem('@travels:name')

      if (userName) {
        setName(userName)
        setLoading(false)
        return;
      }

      setLoading(false)
    })()
  }, [])

  const setUserName = useCallback(async (userName: string) => {
    setName(userName)
    await AsyncStorage.setItem('@travels:name', userName)
  }, [])

  return (
    <UserContext.Provider value={{ name, loading, setUserName }}>
      {children}
    </UserContext.Provider>
  )
}

function useInfo() {
  const context = useContext(UserContext);

  return context
}

export { UserProvider, useInfo }
