import React from "react";
import FormPrimary from "@/components/partials/FormPrimary/FormPrimary";
import { FormFieldType } from "@/utils/types/types";
import { Divider } from "antd";
import AddButton from "@/components/partials/AddButton";
import EventFormVenueDetails from "./EventFormVenueDetails";

export default function EventFormPrimary({
  formFields,
  details
}: {
  formFields: FormFieldType[];
  details:string
}) {
  return (
    <div className="p-10">
        <p className="mb-9 text-white font-medium">{details}</p>

      <FormPrimary fields={formFields} submitHandler={() => {}} />
      <Divider className="border-[#343045] my-[40px] mx-[20px] min-w-[auto] w-[auto]" />
      <EventFormVenueDetails />
      {/* <AddButton defaultTitle="Get tickets" /> */}
    </div>
  );
}
