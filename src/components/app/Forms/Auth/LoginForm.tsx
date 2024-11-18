"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { AuthFormData } from "../../../../store/types";
import AuthWrapper from "./AuthWrapper";
import { useEffect, useState } from "react";
import { instance } from "@/api/instance";
import { useAuthStore } from "@/api/auth";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { login } = useAuthStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const authType = searchParams.get("auth");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (authType === "login") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [authType]);

  const formSubmitHandler = async (form: AuthFormData) => {
    try {
      setIsLoading(true);
      await login(form);
      toast("Logged in successfully", { theme: "dark" });
      router.push("/");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <AuthWrapper
      formName="login"
      onFormSubmit={formSubmitHandler}
      isOpen={isOpen}
      isLoading={isLoading}
    />
  );
};

export default LoginForm;
