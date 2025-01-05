"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createVcard } from "@/api/vcard/vcardApis";
import AddSocialMediaChannel from "@/components/partials/ConfigurationPanel/AddSocialMediaChannel/AddSocialMediaChannel";
import CustomCollapse from "@/components/partials/CustomCollapse/CustomCollapse";
import {
  IconDeviceMobileCog,
  IconEdit,
  IconListDetails,
  IconSettings,
  IconSpeakerphone,
} from "@tabler/icons-react";
import ColorSelector from "@/components/partials/ConfigurationPanel/ColorSelector/ColorSelector";
import FormTitleInput from "@/components/partials/Inputs/FormTitleInput";
import WelcomeScreenLogo from "@/components/partials/ConfigurationPanel/WelcomeScreenLogo/WelcomeScreenLogo";
import AddShareButton from "@/components/partials/ConfigurationPanel/AddShareButton/AddShareButton";
import VCardInformationSection from "./VCardInformation/VCardInformationSection";
import ButtonPrimary from "@/components/partials/ButtonPrimary/ButtonPrimary";
import { toast } from "react-toastify";
import { colors } from "@/constants/Colors";

const formFields = [
  { name: "Name", placeholder: "First Name" ,col:'col-span-1' },
  { name: "", placeholder: "Last Name",col:'col-span-1' },
  { name: "Numbers", placeholder: "Mobile Number" },
  { name: "", placeholder: "Phone" ,col:'col-span-1' },
  { name: "", placeholder: "Fax" ,col:'col-span-1'  },
  { name: "Email", placeholder: "you@email.com" },
  { name: "Company", placeholder: "Company" ,col:'col-span-1' },
  { name: "", placeholder: "Your Job" ,col:'col-span-1'  },
  { name: "Address", placeholder: "Address" },
  { name: "Website", placeholder: "www.your-website.com" },
  {
    name: "Summary",
    placeholder: "Summary",
    textArea: true,
    rows: 5,
  },
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
        content={<VCardInformationSection formFields={formFields} />}
        prependIcon={<IconListDetails />}
        defaultOpen
      />

      <CustomCollapse
        label="Social Media"
        content={<AddSocialMediaChannel />}
        prependIcon={<IconSpeakerphone />}
        defaultOpen
      />

      <CustomCollapse
        label="Welcome Screen"
        content={<WelcomeScreenLogo />}
        prependIcon={<IconDeviceMobileCog />}
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
