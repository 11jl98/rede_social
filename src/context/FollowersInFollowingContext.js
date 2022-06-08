import { createContext } from "react"
import Followers from "./hooks/FollowersInFollowing"

const ContextFollowers = createContext()

function FollowersProvider({children}){
    const { countFollowers, followers, followings }  = Followers()

    return(
        <ContextFollowers.Provider value={{countFollowers, followers, followings}}>
            {children}
        </ContextFollowers.Provider>
    )
}
export {ContextFollowers, FollowersProvider}