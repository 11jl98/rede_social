import { useState, useEffect } from "react";
import { Login } from "../../services/SingIn";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UseSingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  async function login() {
    try{
      
      const token = await Login({ email: email, password: password });
      if (!token) return alert("Usuario não encontrado");
  
  
      AsyncStorage.setItem("token", token);
      navigation.navigate('Home')
      
    }
    catch(err){
      alert(err)
    }
  }
  return { login, setEmail, email, setPassword, password};
}
