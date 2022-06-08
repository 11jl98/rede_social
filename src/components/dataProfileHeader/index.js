import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { useEffect, useContext } from "react";
import { ContextUsers } from "../../context/UsersContext";
import { ContextFollowers } from "../../context/FollowersInFollowingContext";
import { ContextPosts } from "../../context/PostsContext";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 90
  : 64;

export default function dataProfile({ data }) {

  const { GetAvatarUser, avatarUser, GetUser, user } = useContext(ContextUsers)
  const { countFollowers, followers, followings } = useContext(ContextFollowers)
  const { PostsCountUser , postsCount } = useContext(ContextPosts)

  useEffect(()=>{
    GetUser()
    GetAvatarUser()
    countFollowers()
    PostsCountUser()
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{
            uri: `data:image/jpeg;base64,${avatarUser}`,
          }}
          style={styles.userAvatar}
        />
        <View style={styles.contentDataPosts}>
          <Text style={styles.numberPosts}>{postsCount}</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.contentDataPosts}>
          <Text style={styles.numberPosts}>{followers}</Text>
          <Text>Seguidores</Text>
        </View>
        <View style={styles.contentDataPosts}>
          <Text style={styles.numberPosts}>{followings}</Text>
          <Text>Seguindo</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.textPosts}>{user.name_user}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>{user.description}</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.buttonEdit} onPress={()=> console.log(postsCount)}>
          <Text style={{ fontSize:12 }}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFAFA",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -34,
    paddingTop: 22,
    paddingBottom: 22,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 5,
    zIndex: 99,
    borderBottomWidth: 1,
    borderBottomColor: '#016170'
   
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
  },

  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#171C26",
    marginLeft: 10,
  },
  buttonUser: {
    width: 70,
    height: 70,
    backgroundColor: "#171C26",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70 / 2,
  },
  contentDataPosts: {
    paddingStart: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  numberPosts: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#171C26",
  },
  textPosts: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#171C26",
    paddingTop: 5,
  },
  description: {
    fontSize: 12,
    color: "#171C26",
    paddingStart: 13,
  },

  userAvatar: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70 / 2,
  },
  buttonEdit:{
    marginTop: 10,
    width: '100%',
    height:25,
    borderColor: '#009393',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
