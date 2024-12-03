import React, { useState } from "react";
import OuterBody from "../OuterBody/OuterBody";
import BasicInput from "../../Inputs/BasicInput/BasicInput";
import BasicTextArea from "../../Inputs/BasicInput/BasicTextArea";
import { Controller, useForm } from "react-hook-form";
import ButtonPrimary from "@/components/partials/ButtonPrimary/ButtonPrimary";
import { createVcard } from "@/api/vcard/vcardApis";
import { toast } from "react-toastify";
import ColorSelector from "../../ColorSelector/ColorSelector";

interface ColorType {
  background?: string;
  primary?: string;
  button?: string;
}
import FormPrimary from "@/components/partials/FormPrimary/FormPrimary";

const formFields = [
  { name: "firstName", placeholder: "First Name" },
  { name: "lastName", placeholder: "Last Name" },
  { name: "mobile", placeholder: "Mobile Number" },
  { name: "phone", placeholder: "Phone" },
  { name: "fax", placeholder: "Fax" },
  { name: "email", placeholder: "Email" },
  { name: "company", placeholder: "Company" },
  { name: "yourJob", placeholder: "Your Job" },
  { name: "address", placeholder: "Address" },
  { name: "website", placeholder: "Website" },
  { name: "summary", placeholder: "Summary", col: "col-span-2" },
];

const VCardForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm(); // Ensure control is included
  const [colorState, setColorState] = useState<ColorType>({
    background: "",
    button: "",
    primary: "",
  });

  const submitHandler = async (data: any) => {
    console.log(data, "DATAAAA"); // This should log the form data
    const formData = new FormData();

    for (let key in data) {
      formData.append(key, data[key]);
    }

    const styling = JSON.stringify(colorState);
    const body = { ...data, styling };
    // return;
    const response = await createVcard(body);
    console.log(response, "response", response.status);
    if (response.status == 201) {
      console.log("INSIDEEEE", response);
      toast.success("Success", { autoClose: false });
    }
  };

  const colorHandler = (val: string, label: string) => {
    setColorState((prv) => {
      return { ...prv, [label]: val };
    });
  };

  return (
    <div className="w-full flex flex-col gap-y-6 px-20 py-10 bg-[var(--primaryDark)]">
      <ColorSelector />
      <FormPrimary fields={formFields} />
    </div>
  );
};

export default VCardForm;
