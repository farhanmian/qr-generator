import React from "react";
import VCardForm from "@/components/Forms/VCardForm/VCardForm";

export default function page() {
  return (
    <div className="innerContainer flex flex-1 justify-between gap-x-6 pt-20">
      <VCardForm />
      <div className="max-w-lg w-full primaryFormBg " />
    </div>
  );
}
