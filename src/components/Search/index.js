import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisa"
        />
        <TouchableOpacity
          style={styles.icon}
        >
          <Ionicons name="search" color="#009393" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#009393",
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: "85%",
    height: 42,
    color: "#009393",
    padding: 10,
    fontSize: 18,
  },
  inputArea: {
    flexDirection: "row",
    width: "95%",
    height: 42,
    backgroundColor: "#FFFAFA",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 15,
  },
  inputAreaDiag: {
    width: "100%",
    height: 40,
    backgroundColor: "#17a2b8",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    justifyContent: "center",
  },
  icon: {
    width: "15%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
