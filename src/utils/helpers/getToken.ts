import { cookies } from "next/headers";

const getToken = () => {
  return cookies().get("token")?.value;
};

export default getToken;
