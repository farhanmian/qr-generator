import FormPrimary from "@/components/partials/FormPrimary/FormPrimary";
import { FormFieldType } from "@/utils/types/types";
import React from "react";

export const WebsiteFormPrimary = ({
  formFields,
}: {
  formFields: FormFieldType[];
}) => {
  const changeHandler = () => {};

  return (
    <div className="p-10 text-white">
      <p className="font-semibold">Type in the website to link with your QR Code</p>
      <div className="flex items-center gap-x-6 w-full mt-5">
      <p className="font-bold leading-[0.8]">Website:</p>
      <FormPrimary
        changeHandler={changeHandler}
        isSubmit={false}
        fields={formFields}
        className="w-full"
      />
      </div>
    </div>

  );
};
