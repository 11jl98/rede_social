import { createContext } from "react"
import Users from "./hooks/Users"

const ContextUsers = createContext()

function UsersProvider({children}){
    const { GetUser, user, searchUser, usersSearch, GetFollowers, userSave, setUserSave }  = Users()

    return(
        <ContextUsers.Provider value={{GetUser, user, searchUser, usersSearch, GetFollowers, userSave, setUserSave}}>
            {children}
        </ContextUsers.Provider>
    )
}
export {ContextUsers, UsersProvider}