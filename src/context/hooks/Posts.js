import { useState, useEffect } from "react";
import { getAllUserPosts, countPostUser, findByPostsInFollowers } from "../../services/Posts";

export default function Posts() {
  const [posts, setPosts] = useState("");
  const [postsFindFollowers, setPostsFindFollowers] = useState([]);
  const [postsCount, setPostsCount] = useState(0);
  const [page, setPage] = useState(1);
  const perPage = 10
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

  async function FindByPostsInFollowers(){
    try {
      const posts = await findByPostsInFollowers(perPage, page)
      setPostsFindFollowers(posts)
      setPage((state)=> state + 1)
    } catch (error) {
      alert(error)
    }
  }
  return { GetAllUserPosts, posts, PostsCountUser, postsCount, FindByPostsInFollowers, postsFindFollowers };
}
