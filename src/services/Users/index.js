import { http } from "../../utils/api/axios";

async function getUser() {
  const { data } = await http.get("/users");
  return data;
}

async function getAvatarUser() {
  const {
    data: { base64 },
  } = await http.get("/upload/avatar-user");
  return base64
}

export { getUser,  getAvatarUser };
