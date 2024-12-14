import { IconFileText } from "@tabler/icons-react";
import React from "react";
import BasicInput from "./BasicInput/BasicInput";

const FormTitleInput: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-x-2 mb-4">
      <IconFileText width={40} height={40} />
      <BasicInput
        placeholder={placeholder}
        containerClassName="w-full"
        inputClass="primaryFormBg py-4 text-lg"
      />
    </div>
  );
};

export default FormTitleInput;
