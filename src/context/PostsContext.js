import { createContext } from "react"
import Posts from "./hooks/Posts"

const ContextPosts = createContext()

function PostsProvider({children}){
    const { GetAllUserPosts, posts, PostsCountUser ,postsCount }  = Posts()

    return(
        <ContextPosts.Provider value={{GetAllUserPosts, posts, PostsCountUser ,postsCount}}>
            {children}
        </ContextPosts.Provider>
    )
}
export {ContextPosts, PostsProvider}