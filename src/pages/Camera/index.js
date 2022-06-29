import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import Camera from "../../components/Camera";
import { UsersProvider } from "../../context/UsersContext";
import { CameraProvider } from "../../context/ContextCamera";

export default function CameraUser() {
  return (
    <UsersProvider>
      <CameraProvider>
        <Camera />
      </CameraProvider>
    </UsersProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAFA",
  },
});
