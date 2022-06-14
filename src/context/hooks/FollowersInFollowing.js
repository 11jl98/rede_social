import { useState, useEffect } from "react";
import {
  CountFollowers,
  CountFollowing,
  FollowersSave,
  FollowersDelete,
} from "../../services/FollowersInFollowing";

export default function Followers() {
  const [followers, setFollowers] = useState(0);
  const [followings, setFollowings] = useState(0);
  const [idFll, setId] = useState(0);

  async function countFollowers() {
    try {
      const totalsFollowers = await CountFollowers();
      setFollowers(totalsFollowers);

      countFollowings();
    } catch (err) {
      console.log(err)
    }
  }

  async function countFollowings() {
    try {
      const totalsFollowers = await CountFollowing();
      setFollowings(totalsFollowers);
    } catch (err) {}
  }

  async function followersSave(id_followers) {
    try {
      const id = await FollowersSave(id_followers);
      setId(id);
    } catch (err) {}
  }

  async function followersDelete(id_followers) {
    try {
      await FollowersDelete(id_followers);
      setId('');
    } catch (err) {
      console.log(err)
    }
  }


  return { countFollowers, followers, followings, followersSave, idFll, followersDelete };
}
