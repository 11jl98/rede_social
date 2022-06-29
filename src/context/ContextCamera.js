import { createContext } from "react"
import Camera from "./hooks/Camera"

const ContextCamera = createContext()

function CameraProvider({children}){
    const { type, setType, permission, setPermission, camRef, capturePhoto,  isSave, setIsSave, photo, flashMode, setFlashMode }  = Camera()

    return(
        <ContextCamera.Provider value={{type, setType, permission, setPermission, camRef, capturePhoto,  isSave, setIsSave, photo, flashMode, setFlashMode}}>
            {children}
        </ContextCamera.Provider>
    )
}
export {ContextCamera, CameraProvider}