import React from "react";
import CreatepageCategoryList from "@/components/app/CreatePage/CreatePageCategoryList/CreatepageCategoryList";

const SelectQrType = () => {
  return (
    <section className="mt-20 mb-28">
      <div className="innerContainer">
        <h1 className="text-center mb-20">Select your QR Code type</h1>

        <CreatepageCategoryList />
      </div>
    </section>
  );
};

export default SelectQrType;
