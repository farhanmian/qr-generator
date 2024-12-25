"use client";

import React, { useEffect, useState } from "react";
import styles from "./AuthWrapper.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import ButtonPrimary from "@/components/partials/ButtonPrimary/ButtonPrimary";
import { AuthFormData } from "@/store/types";
// import { AuthFormData } from "../../../../store/types";

const formFields = [
  {
    label: "Full Name",
    name: "name",
    type: "text",
    placeholder: "Enter your name",
    minLength: 3,
  },
  {
    label: "Email Address",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    minLength: 6,
  },
];

type AuthWrapperProps = {
  formName: "signup" | "login";
  onFormSubmit: (form: AuthFormData) => void;
  isOpen: boolean;
  isLoading?: boolean;
};

const AuthWrapper: React.FC<AuthWrapperProps> = ({
  formName,
  onFormSubmit,
  isOpen,
  isLoading,
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    if (formName === "login") {
      onFormSubmit({ email: formData.email, password: formData.password });
    } else {
      onFormSubmit(formData);
    }
  };

  const handleOverlayClick = () => {
    router.push(pathname);
  };

  return !isOpen ? null : (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center 
                     justify-center backdrop-blur-sm z-40"
        onClick={handleOverlayClick}
      ></div>

      <div
        className={`${styles.container} fixed z-50 w-full max-w-md p-8 pb-7 bg-primaryDark/50 border border-primary rounded-xl shadow-xl transform transition-all`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            {formName === "signup" ? "Sign Up" : "Login"}
          </h2>
          <Link
            href={`${pathname}`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          {formFields.map((item) =>
            formName === "login" && item.name === "name" ? (
              ""
            ) : (
              <div key={item.name}>
                <label
                  htmlFor={item.name}
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {item.label}
                </label>
                <input
                  type={item.type}
                  id={item.name}
                  minLength={item.minLength}
                  name={item.name}
                  value={formData[item.name as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 
                           rounded-lg focus:outline-none focus:ring-2 
                           focus:ring-secondary text-white placeholder-gray-400
                           transition-colors duration-200"
                  placeholder={item.placeholder}
                  required
                />
              </div>
            )
          )}

          <ButtonPrimary
            isLoading={isLoading}
            type="submit"
            className={`w-full mt-3 ${styles.signupBtn}`}
          >
            {formName === "login" ? "Login" : "Sign Up"}
          </ButtonPrimary>
        </form>

        <Link
          href={`${pathname}?auth=${formName === "login" ? "signup" : "login"}`}
          className="mx-auto w-max block mt-6 text-slate-100 text-sm"
        >
          {formName === "login"
            ? "Don't have an account? Sign Up"
            : "Have an account? Login"}
        </Link>
      </div>
    </>
  );
};

export default AuthWrapper;
