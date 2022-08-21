import { http } from "../../utils/api/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

async function VerifyToken() {
  const navigation = useNavigation();
  const token = await AsyncStorage.getItem("token");
  if (token) {
    try {
      await http.get("/users");
      navigation.navigate("Home");
    } catch (error) {
      navigation.navigate("SingIn");
    }
  }
  navigation.navigate("SingIn");
}

export { VerifyToken };
