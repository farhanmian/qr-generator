import { authInstance, formDataInstance } from "../instance";

interface getService {
  service: string;
  serviceId: string;
}

export const createWebsite = async (body: any) => {
  const res = await formDataInstance.post("/website", body);
  console.log(res, "RESPONSEEEE_SAP");
  return res;
};

export const getWebsite = async (url: getService) => {
  const res = await authInstance.get(`${url.service}/${url.serviceId}`);
  return res;
};
