import WebsiteForm from "@/components/app/Forms/WebsiteForm/WebsiteForm";
import React from "react";

const websitePage = () => {
  return (
    <div className="innerContainer flex flex-1 justify-between gap-x-6 pt-20">
      <WebsiteForm />
      <div className="max-w-lg w-full primaryFormBg " />
    </div>
  );
};

export default websitePage;
