import { useState, useEffect, useRef } from "react";
import { CameraType, FlashMode } from "expo-camera";

export default function UseSingIn() {
  const [permission, setPermission] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [isSave, setIsSave] = useState(false);
  const [flashMode, setFlashMode] = useState(FlashMode.off);
    const camRef = useRef(null)

  async function capturePhoto() {
    if(camRef){
        const data = await camRef.current.takePictureAsync({base64: true})
        console.log(data.uri)
        setPhoto(data.uri)
        setIsSave(true)
    }
  }
  return { type, setType, permission, setPermission, camRef, capturePhoto, isSave, setIsSave, photo, setFlashMode, flashMode};
}
