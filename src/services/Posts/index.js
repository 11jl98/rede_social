import { http } from "../../utils/api/axios";

async function getAllUserPosts() {
  const data  = await http.get("/upload/post-file");
  return data;
}
async function findByPostsInFollowers(perPage, page) {
  const {data}  = await http.get(`/posts?perPage=${perPage}&${page}`);
  return data;
}

async function countPostUser() {
  const  { data } = await http.get("/posts/count");
  return data.totals.total;
}

export { getAllUserPosts, findByPostsInFollowers, countPostUser  };
