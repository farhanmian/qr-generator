import React, { use } from "react";
import styles from "./FormPrimary.module.css";
// import { FormFieldType } from "@/utils/types/types";
import { Controller, useForm } from "react-hook-form";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import BasicInput from "../Inputs/BasicInput/BasicInput";

type FormFieldType = {
  name: string;
  placeholder: string;
  col?: string;
  textArea?: boolean;
  rows?: number;
}[];

const FormPrimary: React.FC<{
  className?: string;
  fields: FormFieldType;
  submitHandler?: (data: any) => void;
  changeHandler?: (data: any) => void;
  isSubmit?: boolean;
}> = ({ changeHandler, className, fields, submitHandler, isSubmit = true }) => {
  const {
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(watch(), "WATCHHHH");
  const classes = className;
  return (
    <form
      // onSubmit={handleSubmit( submitHandler)}
      onChange={() => changeHandler && changeHandler(watch())}
      className={`grid grid-cols-2 gap-x-4 gap-y-8 primaryFormBg rounded-xl ${
        classes || ""
      }`}
    >
      {fields &&
        fields.map((item, index) => (
          <Controller
            key={item.name}
            name={item.name}
            control={control} // Ensure control is passed
            render={({ field }) => (
              <BasicInput
                // placeholder="Address"
                {...field}
                key={index}
                name={item.name}
                placeholder={item.placeholder}
                containerClassName={item.col ? item.col : "col-span-1"}
                className={"w-[450px]"}
                textArea={item.textArea}
                rows={item.rows}
              />
            )}
          />
        ))}
    </form>
  );
};

export default FormPrimary;
