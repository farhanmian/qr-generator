"use client";
import React from "react";
import FormTitleInput from "../../Inputs/FormTitleInput";
import CustomCollapse from "@/components/partials/CustomCollapse/CustomCollapse";
import ColorSelector from "../../ColorSelector/ColorSelector";
import IconEdit from "@/components/icons/IconEdit";
import IconUploadFile from "@/components/icons/IconUploadFile";
import UploadFile from "@/components/partials/UploadFile/UploadFile";
import FormPrimary from "@/components/partials/FormPrimary/FormPrimary";
import { colors } from "@/components/constants/Colors";

const formFields = [
  { name: "company", placeholder: "Company" },
  { name: "title", placeholder: "Title" },
  {
    name: "description",
    placeholder: "Description",
    col: "col-span-2",
    textArea: true,
    rows: 1,
  },
  {
    name: "Website",
    placeholder: "Website",
    col: "col-span-2",
    textArea: true,
    rows: 2,
  },
];

const colorSelectorConfig = {
  colors,
  type: "button" as const,
  header: "Personalize your Card by selecting colors and uploading an image.",
};

const PdfForm = () => {
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

  const submitHandler = (data: any) => {
    console.log(data, "DATA_HERE");
  };

  return (
    <div className="w-full flex flex-col gap-y-6 px-20 py-10 ">
      <FormTitleInput placeholder="Name Of Your QR Code" />

      <CustomCollapse
        label="Upload PDF"
        content={<UploadFile title="Select any pdf from your computer." />}
        prependIcon={<IconUploadFile />}
        defaultOpen
      />

      {/* Design & Customization */}
      <CustomCollapse
        label="Design & Customization"
        content={
          <ColorSelector
            config={colorSelectorConfig}
            handleColorSelect={handleColorSelect}
          />
        }
        prependIcon={<IconEdit />}
        defaultOpen
      />

      {/* Basic information */}
      <CustomCollapse
        label="Basic Information"
        content={
          <FormPrimary submitHandler={submitHandler} fields={formFields} />
        }
        prependIcon={<IconEdit />}
        defaultOpen
      />
    </div>
  );
};

export default PdfForm;
