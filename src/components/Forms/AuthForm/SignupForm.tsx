"use client";

import { usePathname, useSearchParams } from "next/navigation";
import AuthWrapper from "./AuthWrapper";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/api/auth";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { AuthFormData } from "@/store/types";

const SignupForm = () => {
  const { signUp } = useAuthStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const authType = searchParams.get("auth");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (authType === "signup") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [authType]);

  const formSubmitHandler = async (form: AuthFormData) => {
    try {
      setIsLoading(true);
      await signUp(form);
      toast("Account created successfully", { theme: "dark" });
      router.push("/?auth=login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AuthWrapper
        formName="signup"
        onFormSubmit={formSubmitHandler}
        isOpen={isOpen}
        isLoading={isLoading}
      />
    </>
  );
};

export default SignupForm;
