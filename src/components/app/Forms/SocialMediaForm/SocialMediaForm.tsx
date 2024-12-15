"use client";
import React from "react";
import FormTitleInput from "../../Inputs/FormTitleInput";
import CustomCollapse from "@/components/partials/CustomCollapse/CustomCollapse";
import ColorSelector from "../../ColorSelector/ColorSelector";
import { colors } from "@/components/constants/Colors";
import IconEdit from "@/components/icons/IconEdit";
import TemplateSelection from "../../TemplateSelection/TemplateSelection";
import FormPrimary from "@/components/partials/FormPrimary/FormPrimary";
import IconSpeakerPhone from "@/components/icons/IconSpeakerPhone";
import AddShareButton from "@/components/partials/AddShareButton/AddShareButton";
import IconSettings from "@/components/icons/IconSettings";
import AddSocialMediaChannel from "@/components/partials/AddSocialMediaChannel/AddSocialMediaChannel";

const colorSelectorConfig = {
  colors,
  type: "button" as const,
  header: "Personalize your Card by selecting colors and uploading an image.",
};

const formFields = [
  {
    name: "Headline:",
    placeholder: "Connect with us on social media.",
    col: "col-span-2",
    textArea: true,
    rows: 1,
  },
  {
    name: "About us:",
    placeholder:
      "Follow us and get updates delivered to your favourite social media channel",
    col: "col-span-2",
    textArea: true,
    rows: 2,
  },
];

const SocialMediaForm = () => {
  const handleColorSelect = (color: {
    id: string;
    primary: string;
    secondary?: string;
  }) => {
    console.log(color, "TEST");
  };

  const submitHandler = (data: any) => {
    console.log(data, "DATA_HERE");
  };

  const handleAddShareButton = (val: boolean) => {
    console.log(val);
  };

  return (
    <div className="w-full flex flex-col gap-y-6 px-20 py-10 ">
      <FormTitleInput placeholder="Name Of Your QR Code" />

      {/* Design & Customization */}
      <CustomCollapse
        label="Design & Customization"
        content={
          <ColorSelector
            config={colorSelectorConfig}
            handleColorSelect={handleColorSelect}
            extendedComponent={<TemplateSelection />}
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
    </div>
  );
};

export default SocialMediaForm;
