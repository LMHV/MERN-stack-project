import { useState } from "react"
import { UserContext } from "./UserContext"

const dataFixed = {
    name: 'Lucho',
    email: 'lucho@gmail.com',
    password: '1234',
    age: 23,
    
}

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(dataFixed);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
