import { cookies } from "next/headers";
const cookieStore = cookies();

const getToken = () => {
  return cookieStore.get("token")?.value;
};

export default getToken;
