import React from "react";
import { Input } from "antd";
import styles from "./BasicInput.module.css";

interface Props {
  className?: any;
  placeholder?: string;
  field: any;
  type?: string;
}

const BasicInput: React.FC<Props> = ({
  className,
  placeholder,
  field,
  type = "text",
}) => {
  const classes = className;

  return (
    <div>
      <Input
        className={`${styles.inputCntainer} ${classes}`}
        placeholder={placeholder}
        {...field}
        type={type}
      />
    </div>
  );
};

export default BasicInput;
