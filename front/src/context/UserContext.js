import { createContext } from "react";


export const UserContext = createContext({
  
  userState: {
    name: '',
    email: '',
    password: '',
    age:0,
    lastLoginTime: '',
    lastLoginIp: 0,
  }
});

