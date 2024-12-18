"use client";
import FormTitleInput from "../../Inputs/FormTitleInput";
import CustomCollapse from "@/components/partials/CustomCollapse/CustomCollapse";
import IconUploadFile from "@/components/icons/IconUploadFile";
import FormPrimary from "@/components/partials/FormPrimary/FormPrimary";
import IconEdit from "@/components/icons/IconEdit";
import { toast } from "react-toastify";
import { createWebsite } from "@/api/website/websiteApis";

const formFields = [
  //   { name: "company", placeholder: "Company" },
  //   { name: "title", placeholder: "Title" },
  //   {
  //     name: "description",
  //     placeholder: "Description",
  //     col: "col-span-2",
  //     textArea: true,
  //     rows: 1,
  //   },
  {
    name: "Website",
    placeholder: "Website",
    col: "col-span-2",
    textArea: true,
    rows: 1,
  },
];

const WebsiteForm = () => {
  const submitHandler = async (data: any) => {
    const formData = new FormData();

    for (let key in data) {
      formData.append(key, data[key]);
    }

    const response = await createWebsite(formData);
    if (response.status == 201) {
      console.log("INSIDEEEE", response);
      toast.success("Success", { autoClose: false });
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-6 px-20 py-10 ">
      <FormTitleInput placeholder="Name Of Your QR Code" />
      {/* Basic information */}
      <CustomCollapse
        label="Enter your website address"
        content={
          <FormPrimary submitHandler={submitHandler} fields={formFields} />
        }
        prependIcon={<IconEdit />}
        defaultOpen
      />
    </div>
  );
};

export default WebsiteForm;
