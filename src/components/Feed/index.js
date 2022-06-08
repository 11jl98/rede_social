import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


export default function Feed({ data }) {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.ProfileData}>
        <View style={styles.content}>
          <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <Image
              source={{
                uri: data.urlUser,
              }}
              style={styles.userAvatar}
            />
          </TouchableOpacity>
          <Text style={styles.userName}>{data.userName}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Feather
              style={styles.options}
              name="more-horizontal"
              size={24}
              color="#171C26"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.userPost}>
        <Image style={styles.imagePost} source={{ uri: data.urlPost }} />
        <View style={styles.content}>
          <TouchableOpacity style={styles.iconsPost}>
            <AntDesign name="hearto" size={24} color="#171C26" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconsPost}>
            <Feather name="message-circle" size={24} color="#171C26" />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.userDescription}>{data.userName}:</Text>
          <Text style={styles.description}>{data.descriptionPost}</Text>
        </View>
      </View>
      <Text style={styles.datePost}>{data.datePost}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingEnd: 10,
    paddingBottom: 5,
    paddingTop: 5,
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
  },

  ProfileData: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  userAvatar: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 44 / 2,
  },

  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#171C26",
    marginLeft: 10,
  },

  userPost: {
    flexDirection: "column",
    paddingTop: 10,
  },

  imagePost: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  userDescription: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#171C26",
  },

  description: {
    fontSize: 14,
    marginLeft: 5,
    color: "#171C26",
  },

  iconsPost: {
    paddingRight: 10,
  },

  datePost: {
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
    color: "#bfbfbf",
  },
});
