import { http } from "../../utils/api/axios";

async function CountFollowers() {
  const { totals } = await http.get("/followers");
  return totals.total;
}

async function CountFollowing() {
  const { totals } = await http.get("/followings");
  return totals.total;
}

export { CountFollowers, CountFollowing };
