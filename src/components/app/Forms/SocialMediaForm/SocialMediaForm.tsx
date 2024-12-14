"use client";
import React from "react";
import FormTitleInput from "../../Inputs/FormTitleInput";
import CustomCollapse from "@/components/partials/CustomCollapse/CustomCollapse";
import ColorSelector from "../../ColorSelector/ColorSelector";
import { colors } from "@/components/constants/Colors";
import IconEdit from "@/components/icons/IconEdit";

const colorSelectorConfig = {
  colors,
  type: "button" as const,
  header: "Personalize your Card by selecting colors and uploading an image.",
};

const SocialMediaForm = () => {
  const handleColorSelect = (color: {
    id: string;
    primary: string;
    secondary?: string;
  }) => {
    console.log(color, "TEST");
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
          />
        }
        prependIcon={<IconEdit />}
        defaultOpen
      />
    </div>
  );
};

export default SocialMediaForm;
