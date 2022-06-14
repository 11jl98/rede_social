import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image
} from "react-native";
import { useContext, useEffect } from "react";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { ContextUsers } from "../../context/UsersContext";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default function Hearder() {
  const navigation = useNavigation();
  const { GetUser, user } = useContext(ContextUsers);

  useEffect(() => {
    GetUser()
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.buttonUser}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image source={{uri:user.avatar_url}} style={styles.avatarUser}/>
        </TouchableOpacity>
        <Text style={styles.username}>{user.name_user}</Text>
      </View>
      <View style={styles.contentActions}>
        <TouchableOpacity>
          <Feather name="plus-circle" size={24} color="#FFFAFA" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            style={{ marginLeft: 15 }}
            name="x"
            size={24}
            color="#FFFAFA"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 10,
    paddingEnd: 16,
    paddingBottom: 16,
    backgroundColor: "#009393",
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  contentActions: {
    alignItems: "center",
    flexDirection: "row",
  },

  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFAFA",
    marginLeft: 10,
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: "#FFFAFA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 44 / 2,
  },
  avatarUser:{
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
  }
});
