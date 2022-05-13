import { useState } from "react"
import { UserContext } from "./UserContext"

const dataFixed = {
    name: 'Lucho',
    email: 'lucho@gmail.com',
    password: '1234',
    age: 23,
    
}

export const UserProvider = ({ children }) => {

    const [state, setState] = useState(dataFixed);

    return (
        <UserContext.Provider value={{state, setState}}>
            {children}
        </UserContext.Provider>
    )
}
