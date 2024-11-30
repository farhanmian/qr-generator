"use client";
import ColorSelector from "@/components/app/ColorSelector/ColorSelector";
import VCardForm from "@/components/app/Forms/VCard/VCardForm";
import React from "react";

const VcardPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  console.log(slug, "slug");

  const submitHandler = () => {};

  return (
    // <div className="flex flex-col flex-1 justify-center items-center">
    //   <ColorSelector />
    //   <VCardForm />
    // </div>

    <div className="innerContainer flex flex-1 justify-between gap-x-6 pt-20">
      <VCardForm />
      <div className="max-w-lg w-full primaryFormBg " />
    </div>
  );
};

export default VcardPage;
