import { IconPhotoUp, IconReload } from "@tabler/icons-react";
import React from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { Button } from "antd";

const WelcomeScreenLogo = () => {
  return (
    <div className="formContainer text-white">
      <p className="mb-10">Display your logo while your page is loading.</p>

      <div className="mx-auto w-60 h-36 border border-gray-100 flex items-center justify-center mb-6">
        <IconPhotoUp width={40} height={40} color="white" />
        {/* <input /> */}
      </div>

      <div className="flex flex-col gap-y-3 items-center">
        <ButtonPrimary className="rounded ">
          Change <IconReload className="ml-2" width={20} height={20} />
        </ButtonPrimary>
        <Button variant="text">Preview</Button>
      </div>
    </div>
  );
};

export default WelcomeScreenLogo;
