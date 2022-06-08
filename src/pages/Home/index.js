import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import Header from "../../components/Header";
import Feed from "../../components/Feed";
import { UsersProvider } from "../../context/UsersContext";

const list = [
  {
    id: 1,
    userName: "Joao",
    urlUser:
      "https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png",
    descriptionPost: "Toyota halux",
    urlPost:
      "https://external-preview.redd.it/XrrqA4tXSxpfTl8M2AGNssZpks3MJwQ2LuDzNnsam64.png?format=pjpg&auto=webp&s=4c016353dcadabee95600f4bb833ce138b02894d",
    datePost: "20/05/2022",
  },
  {
    id: 2,
    userName: "Arthur",
    urlUser:
      "https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png",
    descriptionPost: "Toyota halux",
    urlPost:
      "https://external-preview.redd.it/XrrqA4tXSxpfTl8M2AGNssZpks3MJwQ2LuDzNnsam64.png?format=pjpg&auto=webp&s=4c016353dcadabee95600f4bb833ce138b02894d",
    datePost: "20/05/2022",
  },
  {
    id: 4,
    userName: "Eriks",
    urlUser:
      "https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png",
    descriptionPost: "Toyota halux",
    urlPost:
      "https://external-preview.redd.it/XrrqA4tXSxpfTl8M2AGNssZpks3MJwQ2LuDzNnsam64.png?format=pjpg&auto=webp&s=4c016353dcadabee95600f4bb833ce138b02894d",
    datePost: "20/05/2022",
  },
  {
    id: 5,
    userName: "Militão",
    urlUser:
      "https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png",
    descriptionPost: "Toyota halux",
    urlPost:
      "https://external-preview.redd.it/XrrqA4tXSxpfTl8M2AGNssZpks3MJwQ2LuDzNnsam64.png?format=pjpg&auto=webp&s=4c016353dcadabee95600f4bb833ce138b02894d",
    datePost: "20/05/2022",
  },
];

export default function Home({ navigation }) {
  return (
    <UsersProvider>
      <View style={styles.container}>
        <Header nav={navigation} />
        <FlatList
          style={styles.list}
          data={list}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Feed data={item} nav={navigation} />}
        />
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
