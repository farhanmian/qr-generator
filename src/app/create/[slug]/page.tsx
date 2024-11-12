"use client";
import ColorSelector from "@/components/app/ColorSelector/ColorSelector";
import VCardForm from "@/components/app/Forms/VCard/VCardForm";
import React from "react";

const VcardPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  console.log(slug, "slug");

  const submitHandler = () => {};

  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <VCardForm />
    </div>
  );
};

export default VcardPage;
