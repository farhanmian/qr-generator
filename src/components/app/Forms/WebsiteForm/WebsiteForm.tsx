"use client";
import FormTitleInput from "../../Inputs/FormTitleInput";
import CustomCollapse from "@/components/partials/CustomCollapse/CustomCollapse";
import IconUploadFile from "@/components/icons/IconUploadFile";
import FormPrimary from "@/components/partials/FormPrimary/FormPrimary";
import IconEdit from "@/components/icons/IconEdit";
import { toast } from "react-toastify";
import { createWebsite } from "@/api/website/websiteApis";
import ButtonPrimary from "@/components/partials/ButtonPrimary/ButtonPrimary";
import { useState } from "react";

const formFields = [
  {
    name: "url",
    placeholder: "Website",
    col: "col-span-2",
    textArea: true,
    rows: 1,
  },
];

const WebsiteForm = () => {
  const [values, setValues] = useState();

  const submitHandler = async (data: any) => {
    const formData = new FormData();
    console.log(data, "DATA_DATA_HERE");
    for (let key in data) {
      formData.append(key, data[key]);
    }

    formData.delete("website");

    console.log(formData, "DATA_HERE");
    const response = await createWebsite(data);
    if (response.status == 201) {
      console.log("INSIDEEEE", response);
      toast.success("Success", { autoClose: false });
    }
  };

  const changeHandler = (data: any) => {
    console.log(data, "DATAAAA");
    setValues(data);
  };

  return (
    <div className="w-full flex flex-col gap-y-6 px-20 py-10 ">
      <FormTitleInput placeholder="Name Of Your QR Code" />
      {/* Basic information */}
      <CustomCollapse
        label="Enter your website address"
        content={
          <FormPrimary
            changeHandler={changeHandler}
            isSubmit={false}
            fields={formFields}
          />
        }
        prependIcon={<IconEdit />}
        defaultOpen
      />

      <ButtonPrimary onClick={() => submitHandler(values)}>
        Submit
      </ButtonPrimary>
    </div>
  );
};

export default WebsiteForm;
