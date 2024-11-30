import React, { InputHTMLAttributes } from "react";
import styles from "./BasicInput.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  inputClass?: string;
  containerClassName?: string;
}

const BasicInput: React.FC<Props> = ({
  containerClassName,
  inputClass,
  ...rest
}) => {
  const classes = inputClass;

  return (
    <div className={containerClassName}>
      <input
        {...rest}
        className={`w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 
                  focus:ring-secondary text-white placeholder-gray-400
                  transition-colors duration-200 ${classes || ""}`}
      />
    </div>
  );
};

export default BasicInput;
