import React from "react";
import styles from "./ButtonPrimary.module.css";
import { IconArrowRight } from "@tabler/icons-react";

const ButtonPrimary: React.FC<{
  children: React.ReactNode;
  className?: string;
  theme?: "primary" | "secondary";
  type?:"submit" | "reset" | "button",
  disabled?: boolean;
  onClick?:() => void
}> = ({ children, className: classes, theme = "primary", disabled,onClick ,type}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type ? type : "button"}
      className={`${styles.button} ${
        classes || ""
      } py-3 px-10 rounded-[40px] text-primary active:scale-[.97] transition-all duration-300 ease-out w-max font-semibold text-xl flex items-center justify-center ${
        theme === "primary"
          ? "bg-btn-primary"
          : `bg-btn-secondary text-slate-50 ${styles.btnSecondary}`
      }`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
