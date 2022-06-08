import { createContext } from "react"
import Users from "./hooks/Users"

const ContextUsers = createContext()

function UsersProvider({children}){
    const { GetUser, user, GetAvatarUser, avatarUser }  = Users()

    return(
        <ContextUsers.Provider value={{GetUser, user, GetAvatarUser, avatarUser}}>
            {children}
        </ContextUsers.Provider>
    )
}
export {ContextUsers, UsersProvider}