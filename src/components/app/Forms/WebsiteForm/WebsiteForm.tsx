"use client";
import FormTitleInput from "../../Inputs/FormTitleInput";
import CustomCollapse from "@/components/partials/CustomCollapse/CustomCollapse";
import IconUploadFile from "@/components/icons/IconUploadFile";
import FormPrimary from "@/components/partials/FormPrimary/FormPrimary";
import IconEdit from "@/components/icons/IconEdit";

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
  const submitHandler = (data: any) => {
    console.log(data, "DATA_HERE");
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
