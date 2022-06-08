import { useState, useEffect } from "react";
import { CountFollowers, CountFollowing } from "../../services/FollowersInFollowing";

export default function Followers() {
  const [followers, setFollowers] = useState(0);
  const [followings, setFollowings] = useState(0);

  async function countFollowers() {
    try{
        const totalsFollowers = await CountFollowers()
        setFollowers(totalsFollowers)
        
        countFollowings()
    }
    catch(err){
        
    }
  }

  async function countFollowings() {
    try{
        const totalsFollowers = await CountFollowing()
        setFollowings(totalsFollowers)
    }
    catch(err){
        
    }
  }
  return { countFollowers, followers, followings };
}
