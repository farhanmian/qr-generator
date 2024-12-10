"use client";

import React, { useState } from "react";
import OuterBody from "../OuterBody/OuterBody";
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
import {
  IconFidgetSpinner,
  IconFileText,
  IconListDetails,
} from "@tabler/icons-react";
import FormTitleInput from "../../Inputs/FormTitleInput";
import WelcomeScreenLogo from "@/components/partials/WelcomeScreenLogo/WelcomeScreenLogo";

const formFields = [
  {
    name: "organizerName",
    placeholder: "Organizer or Host Name",
    col: "col-span-2",
  },
  { name: "eventName", placeholder: "Name of the Event", col: "col-span-2" },
  {
    name: "eventSummary",
    placeholder: "Write a short summary about your event",
    textArea: true,
    rows: 4,
    col: "col-span-2",
  },
  { name: "eventDate", placeholder: "Event Date" },
  { name: "eventTime", placeholder: "Event Time" },
  { name: "eventAddress", placeholder: "Event Address", col: "col-span-2" },
  { name: "contact", placeholder: "Contact person for the event" },
  { name: "phone", placeholder: "Phone eg: (000) 000-0000" },
  { name: "email", placeholder: "Email eg: your@email.com" },
  { name: "website", placeholder: "Website eg: www.yourwebsite.com" },
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

  return (
    <div className="w-full flex flex-col gap-y-6 px-20 py-10 bg-[var(--primaryDark)]">
      <FormTitleInput placeholder="Name Of Your Event" />

      <CustomCollapse
        label="Design & Customize your Event"
        content={<ColorSelector />}
        prependIcon={<IconEdit />}
        defaultOpen
      />

      <CustomCollapse
        label="Information"
        content={<FormPrimary fields={formFields} />}
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
        label="Welcome Screen"
        content={<WelcomeScreenLogo />}
        prependIcon={<IconFidgetSpinner />}
        defaultOpen
      />
    </div>
  );
};

export default EventForm;
