import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { useContext, useEffect } from "react";
import { ContextUsers } from '../../context/UsersContext'

export default function HearderProfile() {
  const {GetUser, user } = useContext(ContextUsers)

  useEffect(()=>{
    GetUser()
  },[])

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.imageCapa} source={{ uri:user.url_capa }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#009393",
  },

  imageCapa: {
    width: "100%",
    height: 120,
  },
});
