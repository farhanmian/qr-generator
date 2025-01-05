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
      className={` primaryFormBg rounded-xl gap-y-8 gap-x-6 grid justify-items-start ${
        classes || ""
      }`}
      style={{gridTemplateColumns:'minmax(200px ,324px) 212px'}}
    >
      {fields &&
        fields.map((item, index) => (
          <Controller
            key={item.name}
            name={item.name}
            control={control} // Ensure control is passed
            render={({ field }) => (
              <div className={`${item.col ? `${item.col} justify-end` : "col-span-2"} flex w-full`}>
                {item.name && <span className="max-w-[112px] w-full">
                <p className="font-semibold text-white mb-2 mt-2">{item.name}:</p>
                </span>}
                <BasicInput
                  {...field}
                  key={index}
                  name={item.name}
                  placeholder={item.placeholder}
                  containerClassName={item.col ? `w-[212px]` : " max-w-[450px] w-full"}
                  className={"max-w-[450px] w-full"}
                  textArea={item.textArea}
                  rows={item.rows}
                />
              </div>
            )}
          />
        ))}
    </form>
  );
};

export default FormPrimary;
