import { useState, useEffect } from "react";
import { getUser, getAvatarUser } from "../../services/Users";

export default function UseSingIn() {
  const entityUser = {
    id: "",
    email: "",
    name_user: "",
    avatar_url: "",
    url_capa: "",
    description: "",
    password: "",
  };
  const [user, setUser] = useState(entityUser);
  const [avatarUser, setavatarUser] = useState(null);

  async function GetUser() {
    try {
        const data = await getUser();
        setUser(data)
    } catch (err) {
    }
  }

  async function GetAvatarUser(){
    try {
      const data =  await getAvatarUser()
      setavatarUser(data)
    } catch (error) {
      
    }
  }

  return { GetUser, user, GetAvatarUser, avatarUser };
}
