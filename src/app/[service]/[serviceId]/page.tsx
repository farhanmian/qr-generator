import { getVcard } from "@/api/vcard/vcardApis";
import React from "react";
import { cookies, headers } from "next/headers";

const Service = async ({
  params,
}: {
  params: { service: string; serviceId: string };
}) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  console.log("TESTTTT", params);
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${params.service}/${params.serviceId}`;
  console.log(url, "URL_HEREEEE");

  const res = await fetch(
    // Fixed the URL
    url,
    {
      headers: {
        Authorization: `Bearer ${token?.value}`, // Add Bearer token
        ...headers, // Include any other headers if necessary
      },
    }
  );

  const result = await res.json();
  console.log(result, "RESPONSEEEE");

  console.log(res);
  return <div>Service</div>;
};

export default Service;
