import React from "react";
import styles from "./ButtonPrimary.module.css";
import { IconArrowRight } from "@tabler/icons-react";
import Loading from "../Loading";

interface ButtonPrimaryProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  className?: string;
  theme?: "primary" | "secondary";
  isLoading?: boolean;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  children,
  className: classes,
  theme = "primary",
  isLoading,
  ...rest
}) => {
  return (
    <button
      disabled={rest.disabled || isLoading}
      // onClick={onClick}
      type={rest.type ? rest.type : "button"}
      className={`${styles.button} ${
        classes || ""
      } py-3 px-10 rounded-[40px] text-primary cursor-pointer active:scale-[.97] transition-all duration-300 ease-out font-semibold text-xl relative cursor-pointer ${
        theme === "primary"
          ? "bg-btn-primary"
          : `bg-btn-secondary text-slate-50 ${styles.btnSecondary}`
      }`}
      {...rest}
    >
      <div
        className={`flex items-center justify-center w-full ${
          isLoading ? "opacity-0" : ""
        }`}
      >
        {children}
      </div>
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <Loading color="#221f30" />
        </div>
      )}
    </button>
  );
};

export default ButtonPrimary;
