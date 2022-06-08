import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import HeaderProfile from "../../components/HeaderProfile";
import DataProfile from "../../components/dataProfileHeader";
import PostsProfile from "../../components/PostsProfile";
import { UsersProvider } from "../../context/UsersContext";
import { FollowersProvider } from "../../context/FollowersInFollowingContext";
import { PostsProvider } from "../../context/PostsContext";

export default function Profile() {
  return (
    <UsersProvider>
      <Animatable.View animation="fadeInUp" style={styles.container}>
        <HeaderProfile />
        <PostsProvider>
          <FollowersProvider>
            <DataProfile />
          </FollowersProvider>
          <PostsProfile />
        </PostsProvider>
      </Animatable.View>
    </UsersProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAFA",
  },
});
