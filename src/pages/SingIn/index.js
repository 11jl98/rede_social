import { LogIn } from "../../components/Login";
import {  SingInProvider } from "../../context/SingInContext";

export default function SingIn() {

  return (

    <SingInProvider>
     <LogIn/>
    </SingInProvider>
  );
}
