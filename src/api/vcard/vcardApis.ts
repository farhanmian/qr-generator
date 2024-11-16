import { CreateVcard } from "@/utils/types/types";
import { authInstance, formDataInstance } from "../instance";

interface getService {
  service: string;
  serviceId: string;
}

export const createVcard = async (body: CreateVcard) => {
  const res = await authInstance.post("/vcard", body);
  console.log(res, "RESPONSEEEE_SAP");
  return res;
};

export const getVcard = async (url: getService) => {
  const res = await authInstance.get(`${url.service}/${url.serviceId}`);
  return res;
};
