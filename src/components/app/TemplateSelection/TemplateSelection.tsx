"use client";
import Image from "next/image";
import React from "react";
import styles from "./TempalteSelection.module.css";

const TemplateSelection = () => {
  return (
    <div className="mt-14 pt-5 border-t border-white">
      Choose image from template{" "}
      <span className="cursor-pointer text-lightBlue">or upload your own</span>
      <div className="imageContainer mt-10">
        <div className="innerContainer flex gap-5">
          <div className={styles.imageContainer}>
            <Image
              className="w-[220px] h-[140px] "
              src={"/images/social_background3.jpg"}
              width={220}
              height={100}
              alt=""
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              className="w-[220px] h-[140px]"
              src={"/images/social3.avif"}
              width={220}
              height={100}
              alt=""
            />
          </div>

          <div className={styles.imageContainer}>
            <Image
              className="w-[220px] h-[140px]"
              src={"/images/social_background2.webp"}
              width={220}
              height={100}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelection;
