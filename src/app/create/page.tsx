import React from "react";
import CategoryList from "@/components/app/CategoryList/CategoryList";

const SelectQrType = () => {
  return (
    <section className="mt-20 mb-28">
      <div className="innerContainer">
        <h1 className="text-center mb-20">Select your QR Code type</h1>

        <CategoryList />
      </div>
    </section>
  );
};

export default SelectQrType;
