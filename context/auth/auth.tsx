// modules
import * as React from 'react';
import { createContext, useState } from 'react';

// create context
export const AuthContext = createContext<any>([]);

export const AuthProvider = ({ children }: any) => {

    // api simulation
  const [user, setUser] = useState<any>(null);
  const [isAuth, setisAuth] = useState(false)

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        user,
        setUser,
        login: async (email: any, password: any) => {
          try {
            console.log("login")
          } catch (e) {
            console.log(e);
          }
        },
        LoginSmsClientes: async(number: any) => {
          try {
            // console.log("login phone", number)
            if (number === "1234") {
              setisAuth(true)
              console.log("logeed")
            }
            else {
              setisAuth(false)
              console.log("not logeed")
            }
          } catch (e) {
            console.log(e)
          }
        }
      }}>
      {children}
    </AuthContext.Provider>
  );
};