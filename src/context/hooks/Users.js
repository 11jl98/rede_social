import { useState, useEffect, useCallback} from "react";
import { getUser, getUserSearch } from "../../services/Users";
import { getFollowers } from '../../services/FollowersInFollowing'

export default function UseSingIn() {
  const entityUser = {
    id: "",
    email: "",
    name_user: "",
    avatar_url: "",
    url_capa: "",
    description: "",
    password: "",
    passwordRepeat: ""
  };
  const [user, setUser] = useState(entityUser);
  const [userSave, setUserSave] = useState(entityUser);
  const [usersSearch, setUsersSearch] = useState([]);

  async function GetUser() {
    try {
        const data = await getUser();
        setUser(data)
    } catch (err) {
    }
  }

  async function searchUser(queryParams){
    try {
      const data =  await getUserSearch(queryParams)
      setUsersSearch(data)
    } catch (error) {
      
    }
  }

  async function GetFollowers(id_followers){
    try {
      const id = getFollowers(id_followers)
      return id
    } catch (error) {
      
    }
  }
  return { GetUser, user, searchUser, usersSearch, GetFollowers, userSave, setUserSave};
}
