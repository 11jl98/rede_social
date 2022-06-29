import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { ContextUsers } from "../../context/UsersContext";

export default function RegisterUsers({ navigation }) {
  const { userSave, setUserSave } = useContext(ContextUsers);
  const [Page2, setPage] = useState(false);

  return (
    <>
      {!Page2 ? (
        <View style={styles.container}>
          <View animation="fadeInLeft" style={styles.containerHeader}>
            <Text style={styles.message}>Realize seu cadastro!</Text>
          </View>

          <View style={styles.containerForm}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <KeyboardAvoidingView behavior={"position"}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <View>
                    <Text style={styles.title}>Email</Text>
                    <TextInput
                      placeholder="Digite seu email..."
                      style={styles.input}
                      onChangeText={(e) =>
                        setUserSave((state) => ({ ...state, email: e }))
                      }
                    />
                    <Text style={styles.title}>Senha</Text>
                    <TextInput
                      secureTextEntry={true}
                      placeholder="Sua senha"
                      style={styles.input}
                      onChangeText={(e) =>
                        setUserSave((state) => ({ ...state, password: e }))
                      }
                    />
                    <Text style={styles.title}>Repita sua senha Senha</Text>
                    <TextInput
                      secureTextEntry={true}
                      placeholder="Digite novamente sua senha..."
                      style={styles.input}
                      onChangeText={(e) =>
                        setUserSave((state) => ({
                          ...state,
                          passwordRepeat: e,
                        }))
                      }
                    />
                    {userSave.password !== userSave.passwordRepeat &&
                      userSave.passwordRepeat !== "" && (
                        <Text style={styles.Ipassword}>
                          Senhas não são compativeis
                        </Text>
                      )}
                    <Text style={styles.title}>Nome</Text>
                    <TextInput
                      placeholder="Digite seu nome..."
                      style={styles.input}
                      onChangeText={(e) =>
                        setUserSave((state) => ({
                          ...state,
                          name_user: e,
                        }))
                      }
                    />
                    <Text style={styles.title}>Descrição</Text>
                    <TextInput
                      placeholder="Sua senha"
                      style={styles.textArea}
                    />
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setPage(true)}
                    >
                      <Text style={styles.buttonText}>Prosseguir</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableWithoutFeedback>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </View>
      ) : (
        <Animatable.View animation={"fadeInUp"} style={styles.container}>
          <View animation="fadeInLeft" style={styles.containerHeader}>
            <Text style={styles.message}>Selecione a suas fotos!</Text>
          </View>

          <View style={styles.containerForm}>
            <View style={styles.containerUser}>
              <TouchableOpacity
                style={styles.avatarPhoto}
                onPress={() => navigation.navigate("Camera")}
              >
                <AntDesign name="camera" size={34} color="#FFFAFA" />
              </TouchableOpacity>
              <Text style={styles.nameUser}>{userSave.name_user}</Text>
            </View>
            {/* <TouchableOpacity style={styles.capaPhoto}>
              <AntDesign name="camera" size={34} color="#FFFAFA" />
            </TouchableOpacity> */}
          </View>
        </Animatable.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009393",
  },

  title: {
    fontSize: 20,
    marginTop: 18,
  },
  nameUser: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  textArea: {
    borderBottomWidth: 1,
    height: 60,
    marginBottom: 12,
    fontSize: 16,
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#FFFAFA",
    paddingStart: "5%",
    paddingEnd: "5%",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  userAvatar: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70 / 2,
  },
  message: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFAFA",
  },
  button: {
    backgroundColor: "#009393",
    borderRadius: 50,
    paddingVertical: 8,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 28,
  },
  buttonText: {
    color: "#FFFAFA",
    fontWeight: "bold",
  },
  Ipassword: {
    fontSize: 16,
    color: "#cc0000",
  },
  avatarPhoto: {
    backgroundColor: "#DCDCDC",
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 14,
    zIndex: 99,
  },
  capaPhoto: {
    backgroundColor: "#DCDCDC",
    width: "100%",
    height: 120,
  },
  containerUser: {
    flexDirection: "row",
    alignItems: "center",
  },
});
