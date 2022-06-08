import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useEffect, useContext } from "react";
import { ContextPosts } from "../../context/PostsContext";

function HearderProfile({ data }) {
  return (
    <View>
      <TouchableOpacity onPress={()=> console.log(data)}>
        <Image style={styles.urlImage} source={{ uri: data.url_file }} />
      </TouchableOpacity>

    </View>
  );
}

export default function list() {
  const { GetAllUserPosts, posts } = useContext(ContextPosts);

  useEffect(() => {
    GetAllUserPosts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={posts.data}
        numColumns={3}
        keyExtractor={(item) => item.id}
        show={false}
        renderItem={({ item }) => (
          <HearderProfile data={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 10
  },

  list: {
    paddingStart: 10,
    paddingEnd: 10,
    flexDirection: "row",
  },

  urlImage: {
    width: 124,
    height: 130,
  },
});
