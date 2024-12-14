"use client";
import React from "react";
import FormTitleInput from "../../Inputs/FormTitleInput";
import CustomCollapse from "@/components/partials/CustomCollapse/CustomCollapse";
import ColorSelector from "../../ColorSelector/ColorSelector";
import IconEdit from "@/components/icons/IconEdit";
import IconUploadFile from "@/components/icons/IconUploadFile";
import UploadFile from "@/components/partials/UploadFile/UploadFile";
import FormPrimary from "@/components/partials/FormPrimary/FormPrimary";

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

const PdfForm = () => {
  const colorSelectorConfig = {
    colors,
    type: "button" as const,
    header: "Personalize your Card by selecting colors and uploading an image.",
  };

  const uploadFileConfig = {
    title: "",
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
