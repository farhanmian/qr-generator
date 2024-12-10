import React from "react";
import styles from "./FormPrimary.module.css";
import BasicInput from "../Inputs/BasicInput/BasicInput";
import { FormFieldType } from "@/utils/types/types";



const FormPrimary: React.FC<{ className?: string; fields: FormFieldType[] }> = ({
  className,
  fields,
}) => {
  const classes = className;
  return (
    <form
      className={`grid grid-cols-2 gap-x-4 gap-y-8 primaryFormBg   ${
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
            textArea={item.textArea}
            rows={item.rows}
            // inputClass={"resize-none"}
          />
        ))}
    </form>
  );
};

export default FormPrimary;
