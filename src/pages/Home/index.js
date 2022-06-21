import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import Header from "../../components/Header";
import Feed from "../../components/Feed";
import { UsersProvider } from "../../context/UsersContext";
import { PostsProvider } from "../../context/PostsContext";

export default function Home({ navigation }) {
  return (
    <UsersProvider>
      <View style={styles.container}>
        <Header nav={navigation} />
        <PostsProvider>
          <Feed />
        </PostsProvider>
      </View>
    </UsersProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAFA",
  },
  list: {
    fontSize: 18,
    paddingStart: 10,
    paddingTop: 14,
  },
});
