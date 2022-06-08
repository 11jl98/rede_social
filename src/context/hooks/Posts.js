import { useState, useEffect } from "react";
import { getAllUserPosts, countPostUser } from "../../services/Posts";

export default function Posts() {
  const [posts, setPosts] = useState("");
  const [postsCount, setPostsCount] = useState(0);

  async function GetAllUserPosts() {
    try{
      const posts = await getAllUserPosts();
      setPosts(posts)
    }
    catch(err){
      alert(err)
    }
  }
  async function PostsCountUser() {
    try{
      const postsCount = await countPostUser();
      setPostsCount(postsCount)
    }
    catch(err){
      alert(err)
    }
  }
  return { GetAllUserPosts, posts, PostsCountUser, postsCount };
}
