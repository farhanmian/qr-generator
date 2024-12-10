import IconCheck from "@/components/icons/IconCheck";
import { Checkbox } from "antd";
import React, { useRef, useState } from "react";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

interface AddShareButtonProps {
    handleAddShareButton:(val:boolean)=>void
}

export default function AddShareButton({handleAddShareButton}:AddShareButtonProps) {
  const handleCheckboxChange = (check:boolean) => {
    handleAddShareButton(check)
  };

  return (
    <div className="primaryFormBg rounded-xl p-10 w-full text-white">
      <div className="flex">
        <h5 className="text-nowrap font-bold">Sharing:</h5>
        <div className="ml-12">
          <CustomCheckbox inputChange={handleCheckboxChange} />
        </div>
      </div>
    </div>
  );
}
