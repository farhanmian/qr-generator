"use client";
import { colors } from "@/constants/Colors";
import ColorSelector from "@/components/partials/ConfigurationPanel/ColorSelector/ColorSelector";
import CustomCollapse from "@/components/partials/CustomCollapse/CustomCollapse";
import FormTitleInput from "@/components/partials/Inputs/FormTitleInput";
import React from "react";
import TemplateSelection from "../../TemplateSelection/TemplateSelection";
import { IconEdit, IconFidgetSpinner, IconSettings, IconSpeakerphone } from "@tabler/icons-react";
import FormPrimary from "@/components/partials/FormPrimary/FormPrimary";
import AddShareButton from "@/components/partials/ConfigurationPanel/AddShareButton/AddShareButton";
import AddSocialMediaChannel from "@/components/partials/ConfigurationPanel/AddSocialMediaChannel/AddSocialMediaChannel";
import WelcomeScreenLogo from "@/components/partials/ConfigurationPanel/WelcomeScreenLogo/WelcomeScreenLogo";
import { SocialMediaFormPrimary } from "./SocialMediaFormPrimary";
// import AddSocialMediaChannel from "@/components/partials/ConfigurationPanel/AddSocialMediaChannel/AddSocialMediaChannel";
// import FormTitleInput from "../../Inputs/FormTitleInput";
// import CustomCollapse from "@/components/partials/CustomCollapse/CustomCollapse";
// import ColorSelector from "../../ColorSelector/ColorSelector";
// import { colors } from "@/components/constants/Colors";
// import IconEdit from "@/components/icons/IconEdit";
// import TemplateSelection from "../../TemplateSelection/TemplateSelection";
// import FormPrimary from "@/components/partials/FormPrimary/FormPrimary";
// import IconSpeakerPhone from "@/components/icons/IconSpeakerPhone";
// import AddShareButton from "@/components/partials/AddShareButton/AddShareButton";
// import IconSettings from "@/components/icons/IconSettings";
// import AddSocialMediaChannel from "@/components/partials/AddSocialMediaChannel/AddSocialMediaChannel";

const colorSelectorConfig = {
  colors,
  type: "button" as const,
  header: "Personalize your Card by selecting colors and uploading an image.",
};

const formFields = [
  {
    name: "aboutUs",
    placeholder: "Headline",
    col: "col-span-2",
    textArea: true,
    rows: 1,
  },
  {
    name: "aboutUs",
    placeholder: "About us",
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
        content={<SocialMediaFormPrimary formFields={formFields}/>}
        prependIcon={<IconEdit />}
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
        prependIcon={<IconFidgetSpinner />}
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
