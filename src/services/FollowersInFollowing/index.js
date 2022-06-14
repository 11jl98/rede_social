import { http } from "../../utils/api/axios";

async function CountFollowers() {
  const { data } = await http.get("/followers");

  return data.totals.total;
}

async function CountFollowing() {
  const { data } = await http.get("/followings");
  return data.totals.total;
}

async function FollowersSave(id_followers) {
  const { data } = await http.post("/followers", { id_followers, date: null });
  return data.id;
}
async function FollowersDelete(id_followers) {
 return await http.delete(`/followers/${id_followers}`);

}

async function getFollowers(id_followers){
  const id  = await http.get(`/followers/${id_followers}`);
  return id;
}

export { CountFollowers, CountFollowing, FollowersSave, getFollowers, FollowersDelete };
