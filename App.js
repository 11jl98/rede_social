import { NavigationContainer } from "@react-navigation/native"
import {  StatusBar } from 'react-native'
import 'react-native-reanimated'
import Routes from "./src/routes"

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#009393'}/>
      <Routes />
    </NavigationContainer>
  );
}


//10.0.0.102