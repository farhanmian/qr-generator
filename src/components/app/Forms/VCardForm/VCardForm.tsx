"use client";

import React, { useState } from "react";
import BasicInput from "../../Inputs/BasicInput/BasicInput";
import BasicTextArea from "../../Inputs/BasicInput/BasicTextArea";
import { Controller, useForm } from "react-hook-form";
import ButtonPrimary from "@/components/partials/ButtonPrimary/ButtonPrimary";
import { createVcard } from "@/api/vcard/vcardApis";
import FormPrimary from "@/components/partials/FormPrimary/FormPrimary";
import ColorSelector from "../../ColorSelector/ColorSelector";
import AddSocialMediaChannel from "@/components/partials/AddSocialMediaChannel/AddSocialMediaChannel";
import IconSpeakerPhone from "@/components/icons/IconSpeakerPhone";
import CustomCollapse from "@/components/partials/CustomCollapse/CustomCollapse";
import IconEdit from "@/components/icons/IconEdit";
import { IconFileText, IconListDetails } from "@tabler/icons-react";
import FormTitleInput from "../../Inputs/FormTitleInput";
import AddShareButton from "@/components/partials/AddShareButton/AddShareButton";
import IconSettings from "@/components/icons/IconSettings";
import { toast } from "react-toastify";

const formFields = [
  { name: "firstName", placeholder: "First Name" },
  { name: "lastName", placeholder: "Last Name" },
  { name: "mobile", placeholder: "Mobile Number" },
  { name: "contact", placeholder: "Contact" },
  // { name: "fax", placeholder: "Fax" },
  { name: "email", placeholder: "Email" },
  { name: "company", placeholder: "Company" },
  { name: "yourJob", placeholder: "Your Job" },
  { name: "address", placeholder: "Address" },
  { name: "website", placeholder: "Website" },
  {
    name: "summary",
    placeholder: "Summary",
    col: "col-span-2",
    textArea: true,
    rows: 5,
  },
];

const colors = [
  { id: "1", primary: "#455a63", secondary: "#e91e63" }, // Gray
  { id: "2", primary: "#0289d1", secondary: "#64b5f6" }, // Blue
  { id: "3", primary: "#d42f2f", secondary: "#ef9a9a" }, // Red
  { id: "4", primary: "#4cb04f", secondary: "#81c784" }, // Green
  { id: "5", primary: "#785548", secondary: "#ff8a65" }, // Brown
  { id: "6", primary: "#41a38b", secondary: "#e9b764" }, // Pink
  { id: "7", primary: "#f564ad", secondary: "#36c17d" }, // Orange
  { id: "8", primary: "#ff8a66", secondary: "#4b5d71" }, // Violet
  { id: "9", primary: "#7a1fa1", secondary: "#1de9b6" }, // Purple
  { id: "10", primary: "#3f51b5", secondary: "#ff4081" }, // Light Green
];

const VCardForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm(); // Ensure control is included

  const [values, setValues] = useState();

  const colorSelectorConfig = {
    colors,
    type: "button" as const,
    header: "Personalize your Card by selecting colors and uploading an image.",
  };

  const handleColorSelect = (color: {
    id: string;
    primary: string;
    secondary?: string;
  }) => {
    console.log(color, "TEST");
  };

  const handleAddShareButton = (val: boolean) => {
    console.log(val);
  };

  const changeHandler = (data: any) => {
    console.log(data, "DATAAAA");
    setValues(data);
  };

  const submitHandler = async (data: any) => {
    console.log(data, "DATAAAA"); // This should log the form data
    const formData = new FormData();

    for (let key in data) {
      formData.append(key, data[key]);
    }

    const response = await createVcard(formData);
    console.log(response, "responsesss", response.status);
    if (response.status == 201) {
      console.log("INSIDEEEE", response);
      toast.success("Success", { autoClose: false });
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-6 px-20 py-10 ">
      <FormTitleInput placeholder="Name Of Your QR Code" />

      <CustomCollapse
        label="Design & Customize your vCard"
        content={
          <ColorSelector
            config={colorSelectorConfig}
            handleColorSelect={handleColorSelect}
          />
        }
        prependIcon={<IconEdit />}
        defaultOpen
      />

      <CustomCollapse
        label="Information"
        content={
          <FormPrimary
            isSubmit={false}
            changeHandler={changeHandler}
            // submitHandler={submitHandler}
            fields={formFields}
          />
        }
        prependIcon={<IconListDetails />}
        defaultOpen
      />

      <CustomCollapse
        label="Social Media"
        content={<AddSocialMediaChannel />}
        prependIcon={<IconSpeakerPhone />}
        defaultOpen
      />
      <CustomCollapse
        label="Advance Options"
        content={<AddShareButton handleAddShareButton={handleAddShareButton} />}
        prependIcon={<IconSettings />}
      />
      <ButtonPrimary onClick={() => submitHandler(values)}>
        Submit
      </ButtonPrimary>
    </div>
  );
};

export default VCardForm;
