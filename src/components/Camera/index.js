import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { useContext, useEffect, useState, useRef } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Camera, CameraType, FlashMode } from "expo-camera";

import { ContextUsers } from "../../context/UsersContext";
import { ContextCamera } from "../../context/ContextCamera";

export default function useCamera() {
  const { GetUser, user } = useContext(ContextUsers);
  const {
    type,
    setType,
    permission,
    setPermission,
    camRef,
    capturePhoto,
    isSave,
    setIsSave,
    photo,
    flashMode,
    setFlashMode,
  } = useContext(ContextCamera);

  const permissionCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setPermission(status === "granted");
  };
  useEffect(() => {
    GetUser();
    permissionCamera();
  }, []);
  if (permission == null) return <View />;

  if (permission === false) return <Text>Acesso negado</Text>;
  return (
    <>
      {!isSave ? (
        <View style={styles.containerCamera}>
          <Camera
            style={styles.camera}
            type={type}
            ref={camRef}
            flashMode={flashMode}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            >
              <AntDesign name="sync" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonFlash}
              onPress={() =>
                setFlashMode(
                  flashMode === FlashMode.off ? FlashMode.on : FlashMode.off
                )
              }
            >
              <Entypo
                name={flashMode === FlashMode.off ? "flashlight" : "flat-brush"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonCapture}
              onPress={capturePhoto}
            ></TouchableOpacity>
          </Camera>
        </View>
      ) : (
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: photo }} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    backgroundColor: "#009393",
  },
  containerCamera: {
    flex: 1,
  },

  camera: {
    flex: 1,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
    padding: 20,
  },
  buttonFlash: {
    flex: 0.1,
    alignSelf: "flex-start",
    alignItems: "center",
    position: "absolute",
    top: 40,
    right: 20,
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  buttonCapture: {
    backgroundColor: "#DCDCDC",
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    flex: 0.1,
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 25,
    padding: 20,
  },
  photo: {
    width: 640,
    height: 480,
  },
});
