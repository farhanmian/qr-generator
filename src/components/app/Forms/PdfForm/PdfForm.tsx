"use client";
import React, { useState } from "react";
// import FormTitleInput from "../../Inputs/FormTitleInput";
import CustomCollapse from "@/components/partials/CustomCollapse/CustomCollapse";
// import ColorSelector from "../../ColorSelector/ColorSelector";
// import IconEdit from "@/components/icons/IconEdit";
import IconUploadFile from "@/components/icons/IconUploadFile";
import UploadFile from "@/components/partials/UploadFile/UploadFile";
import FormPrimary from "@/components/partials/FormPrimary/FormPrimary";
import { colors } from "@/constants/Colors";
import ButtonPrimary from "@/components/partials/ButtonPrimary/ButtonPrimary";
import { toast } from "react-toastify";
import { createPdf } from "@/api/pdf/pdfApis";
import FormTitleInput from "@/components/partials/Inputs/FormTitleInput";
import ColorSelector from "@/components/partials/ConfigurationPanel/ColorSelector/ColorSelector";
import {
  IconCloudUpload,
  IconDeviceMobileCog,
  IconEdit,
} from "@tabler/icons-react";
import WelcomeScreenLogo from "@/components/partials/ConfigurationPanel/WelcomeScreenLogo/WelcomeScreenLogo";
import CustomCheckbox from "@/components/partials/CustomCheckbox/CustomCheckbox";

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
  const [values, setValues] = useState();
  const [file, setFile] = useState();
  const [isDirectLinkPdf, setIsDirectLinkPdf] = useState(false);

  const handleAddShareButton = (val: boolean) => {
    console.log(val);
  };

  const changeHandler = (data: any) => {
    setValues(data);
    console.log(data, "DATAAAA");
  };

  const changeFile = (data: any) => {
    setFile(data);
    console.log(data, "DATAAAAA");
  };

  const submitHandler = async (data: any) => {
    //  console.log(data, "DATAAAA"); // This should log the form data
    const formData = new FormData();

    for (let key in data) {
      formData.append(key, data[key]);
    }

    if (file) {
      formData.append("file", file);
    }

    const response = await createPdf(formData);
    // console.log(response, "responsesss", response.status);
    if (response.status == 201) {
      console.log("INSIDEEEE", response);
      toast.success("Success", { autoClose: false });
    }
  };

  const handleInputChange = (val: boolean) => {
    setIsDirectLinkPdf(val);
  };

  return (
    <div className="w-full flex flex-col gap-y-6 px-20 py-10 ">
      <FormTitleInput placeholder="Name Of Your QR Code" />

      <CustomCollapse
        label="Upload PDF"
        content={
          <UploadFile
            changeHandler={changeFile}
            title="Select any pdf from your computer."
            extendedComponent={
              <CustomCheckbox
                inputChange={handleInputChange}
                label="Link directly to PDF"
              />
            }
          />
        }
        prependIcon={<IconCloudUpload strokeWidth={2.3} />}
        defaultOpen
      />

      {!isDirectLinkPdf && (
        <>
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
              <div className="p-10">
                <FormPrimary
                  changeHandler={changeHandler}
                  isSubmit={false}
                  // submitHandler={submitHandler}
                  fields={formFields}
                />
              </div>
            }
            prependIcon={<IconEdit />}
            defaultOpen
          />

          <CustomCollapse
            label="Welcome Screen"
            content={<WelcomeScreenLogo />}
            prependIcon={<IconDeviceMobileCog />}
            defaultOpen
          />
        </>
      )}

      <ButtonPrimary onClick={() => submitHandler(values)}>
        Submit
      </ButtonPrimary>
    </div>
  );
};

export default PdfForm;
