import VcardResultComponent from "@/components/app/ResultComponents/VcardResultComponent/VcardResultComponent";
import React from "react";

const arjunData = {
  profileImage: "/images/user-2.jpg",
  name: "John Smith",
  description: "Developer",
  phone: "+1 000 000 0000",
  email: "email@gmail.com",
  linkedin: "https://www.linkedin.com/",
};

const page = () => {
  return (
    <>
      <VcardResultComponent data={arjunData} />
    </>
  );
};

export default page;
