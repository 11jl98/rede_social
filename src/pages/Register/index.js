import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import RegisterUsers from "../../components/RegisterUsers";
import { UsersProvider } from "../../context/UsersContext";


export default function Register({navigation}) {
  return (
    <UsersProvider>
      <RegisterUsers navigation={navigation}/>
    </UsersProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAFA",
  },
});
