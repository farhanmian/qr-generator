import React, { InputHTMLAttributes } from "react";
import styles from "./BasicInput.module.css";

interface Props
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  inputClass?: string;
  containerClassName?: string;
  prepend?: string;
  textArea?: boolean;
  rows?: number;
}

const BasicInput: React.FC<Props> = ({
  containerClassName,
  inputClass,
  prepend,
  textArea,
  rows,
  ...rest
}) => {
  const classes = inputClass;

  return (
    <div className={`${containerClassName} ${prepend && "flex"}`}>
      {prepend && (
        <div className="px-4 py-3 bg-[#2D2C36] border border-gray-700 text-gray-400 rounded-l-lg border-r-[0px] text-sm flex items-center">
          {prepend} <span className="leading-4 self-start">*</span>
        </div>
      )}
      {textArea ? (
        <textarea
          {...rest}
          rows={rows ? rows : 4}
          className={`w-full px-4 py-3  transition-all  border border-gray-700 rounded-lg focus:outline-none bg-[#2D2C36]
                  focus:shadow-[0px_0px_4px_2px_#c0b7e81d] focus:border-secondary hover:border-secondary text-white placeholder-gray-400
                  transition-colors transition-[box-shadow] duration-200 ${classes || ""} ${
            prepend && "rounded-l-[0px] "
          }`}
        />
      ) : ( 
        <input
          {...rest}
          className={`w-full px-4 py-3 transition-all  border border-gray-700 rounded-lg focus:outline-none bg-[#2D2C36]
                  focus:shadow-[0px_0px_4px_2px_#c0b7e81d] focus:border-secondary hover:border-secondary text-white placeholder-gray-400
                   transition-colors transition-[box-shadow] duration-200 ${classes || ""} ${
            prepend && "rounded-l-[0px] "
          }`}
        />
      )}
    </div>
  );
};

export default BasicInput;
