"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { createVcard } from "@/api/vcard/vcardApis";
import FormPrimary from "@/components/partials/FormPrimary/FormPrimary";
import AddSocialMediaChannel from "@/components/partials/ConfigurationPanel/AddSocialMediaChannel/AddSocialMediaChannel";
import CustomCollapse from "@/components/partials/CustomCollapse/CustomCollapse";
import ColorSelector from "@/components/partials/ConfigurationPanel/ColorSelector/ColorSelector";
import WelcomeScreenLogo from "@/components/partials/ConfigurationPanel/WelcomeScreenLogo/WelcomeScreenLogo";
import FormTitleInput from "@/components/partials/Inputs/FormTitleInput";
import { IconEdit, IconFidgetSpinner, IconListDetails, IconSettings, IconSpeakerphone } from "@tabler/icons-react";
import AddShareButton from "@/components/partials/ConfigurationPanel/AddShareButton/AddShareButton";
import EventFormPrimary from "./EventFormPrimary/EventFormPrimary";

const formFields = [
  {
    name: "Organizer",
    placeholder: "Company or Host Name",
  },
  { name: "Title*", placeholder: "Name of the Event",  },
  {
    name: "Summary",
    placeholder: "Write a short summary about your event",
    textArea: true,
    rows: 4,
  },
];

const colors = [
  { id: '1', primary: "#455a63", secondary: "#e91e63" }, // Gray
  { id: '2', primary: "#0289d1", secondary: "#64b5f6" }, // Blue
  { id: '3', primary: "#d42f2f", secondary: "#ef9a9a" }, // Red
  { id: '4', primary: "#4cb04f", secondary: "#81c784" }, // Green
  { id: '5', primary: "#785548", secondary: "#ff8a65" }, // Brown
  { id: '6', primary: "#41a38b", secondary: "#e9b764" }, // Pink
  { id: '7', primary: "#f564ad", secondary: "#36c17d" }, // Orange
  { id: '8', primary: "#ff8a66", secondary: "#4b5d71" }, // Violet
  { id: '9', primary: "#7a1fa1", secondary: "#1de9b6" }, // Purple
  { id: '10', primary: "#3f51b5", secondary: "#ff4081" }, // Light Green
];


const EventForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm(); // Ensure control is included

  const submitHandler = async (data: any) => {
    console.log(data, "DATAAAA"); // This should log the form data
    const formData = new FormData();

    for (let key in data) {
      formData.append(key, data[key]);
    }

    const response = await createVcard(data);
    console.log(response, "RESPONSEEEEE");
  };

  const colorSelectorConfig = {
    colors,
    type: 'button' as const,
    header: 'Personalize your Card by selecting colors and uploading an image.'
  }

  const handleColorSelect = (color:{
    id: string;
    primary: string;
    secondary?: string;
}) => {
    console.log(color,"TEST")
  }

  const handleAddShareButton = (val:boolean) =>{
    console.log(val)
  }


  return (
    <div className="w-full flex flex-col gap-y-6 px-20 py-10">
      <FormTitleInput placeholder="Name Of Your Event" />

      <CustomCollapse label="Design & Customize your vCard" content={<ColorSelector config={colorSelectorConfig} handleColorSelect={handleColorSelect} />} prependIcon={<IconEdit />} defaultOpen />

      <CustomCollapse
        label="Basic Information"
        content={<EventFormPrimary details='Include all necessary information about ypur event below.' formFields={formFields} />}
        prependIcon={<IconListDetails size={24}   />}
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

     <CustomCollapse label="Advance Options" content={<AddShareButton handleAddShareButton={handleAddShareButton} />} prependIcon={<IconSettings />}  />

    </div>
  );
};

export default EventForm;
