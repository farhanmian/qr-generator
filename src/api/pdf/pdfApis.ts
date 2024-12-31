import {} from "@/utils/types/types";
import { authInstance, formDataInstance } from "../instance";

interface getService {
  service: string;
  serviceId: string;
}

export const createPdf = async (body: any) => {
  const res = await formDataInstance.post("/pdf", body);

  console.log(res, "RESPONSEEEE_SAP");
  return res;
};

export const getPdf = async (url: getService) => {
  const res = await authInstance.get(`${url.service}/${url.serviceId}`);
  return res;
};
