import { CreateVcard } from "@/utils/types/types";
import { authInstance, formDataInstance } from "../instance";

export const createVcard = async (body: CreateVcard) => {
  const res = await authInstance.post("/vcard", body);
  console.log(res, "RESPONSEEEE_SAP");
  return res;
};
