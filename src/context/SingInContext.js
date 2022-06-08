import { createContext } from "react"
import useSingIn from "./hooks/SingIn"

const ContextSingIn = createContext()

function SingInProvider({children}){
    const { login, setEmail, email, setPassword, password }  = useSingIn()

    return(
        <ContextSingIn.Provider value={{login, setEmail, email, setPassword, password}}>
            {children}
        </ContextSingIn.Provider>
    )
}
export {ContextSingIn, SingInProvider}