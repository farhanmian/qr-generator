import PdfForm from "@/components/app/Forms/PdfForm/PdfForm";
import React from "react";

const PdfPage = () => {
  return (
    <div className="innerContainer flex flex-1 justify-between gap-x-6 pt-20">
      <PdfForm />
      <div className="max-w-lg w-full primaryFormBg " />
    </div>
  );
};

export default PdfPage;
