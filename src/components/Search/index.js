import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ContextUsers } from "../../context/UsersContext";
import { ContextFollowers } from "../../context/FollowersInFollowingContext";

export function Search() {
  const { searchUser, usersSearch, GetFollowers } = useContext(ContextUsers);
  const { followersSave, idFll, followersDelete } =
    useContext(ContextFollowers);

  return (
    <View>
      <View style={styles.containerInput}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="Pesquisa"
            onChangeText={(text) => (text.length > 2 ? searchUser(text) : "")}
          />
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="search" color="#009393" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={styles.list}
        data={usersSearch}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ListSeach
            dataUser={item}
            Followers={GetFollowers}
            saveFollowers={followersSave}
            idFll={idFll}
            deleteFollowers={followersDelete}
          />
        )}
      />
    </View>
  );
}

function ListSeach({
  dataUser,
  Followers,
  saveFollowers,
  idFll,
  deleteFollowers,
}) {
  const [id, setId] = useState("");

  useEffect(() => {
    IsButton();
  }, [dataUser.id, idFll]);

  async function IsButton() {
    const { data } = await Followers(dataUser.id);
    setId(data);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerUsers}>
        <TouchableOpacity>
          {dataUser.avatar_url === null ? (
            <Image
              style={styles.userAvatar}
              source={{
                uri: "https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png",
              }}
            />
          ) : (
            <Image
              style={styles.userAvatar}
              source={{ uri: dataUser.avatar_url }}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.nameUser}>{dataUser.name_user}</Text>
      </View>
      {!id ? (
        <TouchableOpacity
          style={styles.buttonEdit}
          onPress={() => saveFollowers(dataUser.id)}
        >
          <Text>Seguir</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonEdit} onPress={()=> deleteFollowers(dataUser.id)}>
          <Text>Seguindo</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: "row",
    backgroundColor: "#009393",
    alignItems: "center",
    justifyContent: "center",
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

  userAvatar: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70 / 2,
    marginBottom: 14,
    marginTop: 14,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerUsers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  list: {
    fontSize: 18,
    paddingStart: 10,
    paddingEnd: 10,
    paddingTop: 14,
  },
  nameUser: {
    fontSize: 16,
    fontWeight: "bold",
    paddingStart: 10,
  },
  buttonEdit: {
    marginTop: 10,
    marginEnd: 10,
    width: "30%",
    height: 25,
    borderColor: "#009393",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    top: -3,
  },
});
