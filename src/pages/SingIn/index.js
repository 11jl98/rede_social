import { LogIn } from "../../components/Login";
import {  SingInProvider } from "../../context/SingInContext";

export default function SingIn({navigation}) {

  return (

    <SingInProvider>
     <LogIn navigation={navigation}/>
    </SingInProvider>
  );
}
