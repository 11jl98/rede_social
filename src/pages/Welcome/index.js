import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigator = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../assets/logo.jpg")}
          style={{
            width: 250,
            height: 250,
            margin: 0,
            padding: 0,
            borderRadius: 500,
          }}
          resizeMode="contain"
        />
      </View>
      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>
          Tenha uma rede social completa para você!
        </Text>
        <Text style={styles.text}>Faça o seu Login</Text>

        <TouchableOpacity style={styles.button} onPress={()=> navigator.navigate('SingIn')}>
          <Text style={styles.textButton}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009393",
  },
  containerLogo: {
    flex: 2,
    backgroundColor: "#009393",
    alignItems: "center",
    justifyContent: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#FFFAFA",
    borderTopEndRadius:25,
    borderTopStartRadius:25,
    paddingTop: 15,
    paddingStart: 15,
  },
  title:{
    fontSize: 24,
    fontWeight:'bold',
    marginTop: 28,
    marginBottom: 12
  },
  text:{
    color: '#a1a1a1'
  },
  button:{
    position: 'absolute',
    backgroundColor: "#009393",
    borderRadius: 50,
    paddingVertical:8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  textButton:{
    color: '#FFFAFA',
    fontWeight:'bold',

  }

});
