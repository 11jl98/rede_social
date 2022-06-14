import { createContext } from "react"
import Followers from "./hooks/FollowersInFollowing"

const ContextFollowers = createContext()

function FollowersProvider({children}){
    const { countFollowers, followers, followings, followersSave, idFll, followersDelete }  = Followers()

    return(
        <ContextFollowers.Provider value={{countFollowers, followers, followings, followersSave, idFll, followersDelete}}>
            {children}
        </ContextFollowers.Provider>
    )
}
export {ContextFollowers, FollowersProvider}