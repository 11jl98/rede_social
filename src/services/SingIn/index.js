import { http } from "../../utils/api/axios";

async function Login(data) {
  const {
    data: { token },
  } = await http.post("/auth", data);
  return token;
}

export { Login };
