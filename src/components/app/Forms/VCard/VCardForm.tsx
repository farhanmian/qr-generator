import React from "react";
import OuterBody from "../OuterBody/OuterBody";
import BasicInput from "../../Inputs/BasicInput/BasicInput";
import BasicTextArea from "../../Inputs/BasicInput/BasicTextArea";
import { Controller, useForm } from "react-hook-form";
import ButtonPrimary from "@/components/partials/ButtonPrimary/ButtonPrimary";
import { createVcard } from "@/api/vcard/vcardApis";

const VCardForm = () => {
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
    <div className="w-[100%] flex justify-center pb-20">
      <OuterBody logo="Info" heading="Your Information" className={"mb-20"}>
        <div className="bg-purpleLight pl-[55px] pb-20">
          Fill in your contact details. Not all fields are mandatory.
          {/* Image Box */}
          <form onSubmit={handleSubmit(submitHandler)}>
            {/* Title */}
            <div className="mt-8 flex w-[90%] flex-1">
              <p className="w-[140px]">Title:</p>
              <Controller
                name="title"
                control={control} // Ensure control is passed
                render={({ field }) => (
                  <BasicInput
                    field={field}
                    placeholder="Title Number"
                    className={"w-[450px]"}
                  />
                )}
              />
            </div>
            <div className="mt-8 flex w-[90%] flex-1">
              <p className="w-[140px]">Name:</p>
              <div className="flex gap-3">
                <Controller
                  name="firstName"
                  control={control} // Ensure control is passed
                  render={({ field }) => (
                    <BasicInput field={field} placeholder="First Name" />
                  )}
                />
                <Controller
                  name="lastName"
                  control={control} // Ensure control is passed
                  render={({ field }) => (
                    <BasicInput field={field} placeholder="Last Name" />
                  )}
                />
              </div>
            </div>
            {/* Mobile Number */}
            <div className="mt-8 flex w-[90%] flex-1">
              <p className="w-[140px]">Mobile:</p>
              <Controller
                name="contact"
                control={control} // Ensure control is passed
                render={({ field }) => (
                  <BasicInput
                    type="tel"
                    field={field}
                    placeholder="Mobile Number"
                    className={"w-[450px]"}
                  />
                )}
              />
            </div>
            {/* Email */}
            <div className="mt-8 flex w-[90%] flex-1">
              <p className="w-[140px]">Email:</p>
              <Controller
                name="email"
                control={control} // Ensure control is passed
                render={({ field }) => (
                  <BasicInput
                    type="email"
                    field={field}
                    placeholder="Email"
                    className={"w-[250px]"}
                  />
                )}
              />
            </div>
            {/* Company details */}
            <div className="mt-8 flex w-[90%] flex-1">
              <p className="w-[140px]">Company:</p>
              <div className="flex gap-3">
                <Controller
                  name="company"
                  control={control} // Ensure control is passed
                  render={({ field }) => (
                    <BasicInput field={field} placeholder="Company" />
                  )}
                />
                <Controller
                  name="yourJob"
                  control={control} // Ensure control is passed
                  render={({ field }) => (
                    <BasicInput field={field} placeholder="Your Job" />
                  )}
                />
              </div>
            </div>
            {/* Address */}
            <div className="mt-8 flex w-[90%] flex-1">
              <p className="w-[140px]">Address:</p>
              <Controller
                name="address"
                control={control} // Ensure control is passed
                render={({ field }) => (
                  <BasicInput
                    field={field}
                    placeholder="Address"
                    className={"w-[450px]"}
                  />
                )}
              />
            </div>
            {/* Website */}
            <div className="mt-8 flex w-[90%] flex-1">
              <p className="w-[140px]">Website:</p>
              <Controller
                name="website"
                control={control} // Ensure control is passed
                render={({ field }) => (
                  <BasicInput
                    field={field}
                    placeholder="Website"
                    className={"w-[450px]"}
                  />
                )}
              />
            </div>
            {/* Summary */}
            <div className="mt-8 flex w-[90%] flex-1">
              <p className="w-[140px]">Summary:</p>
              <Controller
                name="summary"
                control={control} // Ensure control is passed
                render={({ field }) => (
                  <BasicTextArea
                    field={field}
                    placeholder="Summary"
                    className={"w-[450px]"}
                  />
                )}
              />
            </div>
            <ButtonPrimary type="submit">Submit</ButtonPrimary>
          </form>
        </div>
      </OuterBody>
    </div>
  );
};

export default VCardForm;
