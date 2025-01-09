import FormPrimary from "@/components/partials/FormPrimary/FormPrimary";
import { FormFieldType } from "@/utils/types/types";
import React from "react";

export const SocialMediaFormPrimary = ({
  formFields,
}: {
  formFields: FormFieldType[];
}) => {
  const submitHandler = () => {};
  return (
    <div className="p-10 text-white">
      <p className="font-semibold mb-5">
        Fields markes with a * are reqired information.
      </p>
      <FormPrimary submitHandler={submitHandler} fields={formFields} />
    </div>
  );
};
