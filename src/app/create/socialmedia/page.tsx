import SocialMediaForm from "@/components/app/Forms/SocialMediaForm/SocialMediaForm";
import React from "react";

const SocialMediaPage = () => {
  return (
    <div className="innerContainer flex flex-1 justify-between gap-x-6 pt-20">
      <SocialMediaForm />
      <div className="max-w-lg w-full primaryFormBg " />
    </div>
  );
};

export default SocialMediaPage;
