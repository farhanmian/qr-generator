import React, { use } from "react";
import styles from "./FormPrimary.module.css";
import { FormFieldType } from "@/utils/types/types";
import { Controller, useForm } from "react-hook-form";
import BasicInput from "../Inputs/BasicInput/BasicInput";

const FormPrimary: React.FC<{
  className?: string;
  fields: FormFieldType[];
  submitHandler: (data: any) => void;
}> = ({ className, fields, submitHandler }) => {
  const {
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const classes = className;
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className={`grid grid-cols-2 gap-x-4 gap-y-8 primaryFormBg p-8 rounded-xl shadow-xl ${
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
      <button>Submit</button>
    </form>
  );
};

export default FormPrimary;
