import React from "react";
import styles from "./FormPrimary.module.css";
import BasicInput from "@/components/app/Inputs/BasicInput/BasicInput";

type FormFieldType = {
  name: string;
  placeholder: string;
  col?: string;
}[];

const FormPrimary: React.FC<{ className?: string; fields: FormFieldType }> = ({
  className,
  fields,
}) => {
  const classes = className;
  return (
    <form
      className={`grid grid-cols-2 gap-x-4 gap-y-8 primaryFormBg p-8 border border-primary rounded-xl shadow-xl ${
        classes || ""
      }`}
    >
      {fields &&
        fields.map((item, index) => (
          <BasicInput
            key={index}
            name={item.name}
            placeholder={item.placeholder}
            containerClassName={item.col ? item.col : "col-span-1"}
          />
        ))}
    </form>
  );
};

export default FormPrimary;
