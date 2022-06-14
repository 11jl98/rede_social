import { createContext } from "react"
import Users from "./hooks/Users"

const ContextUsers = createContext()

function UsersProvider({children}){
    const { GetUser, user, searchUser, usersSearch, GetFollowers }  = Users()

    return(
        <ContextUsers.Provider value={{GetUser, user, searchUser, usersSearch, GetFollowers}}>
            {children}
        </ContextUsers.Provider>
    )
}
export {ContextUsers, UsersProvider}