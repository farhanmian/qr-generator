"use client";
import Image from "next/image";
import React from "react";
import styles from "./TempalteSelection.module.css";
import { Divider } from "antd";

const TemplateSelection = () => {
  return (
    <>
    <Divider className="border-[#343045]  m-[0px] min-w-[auto] w-[auto]" />

    <div className="">
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
    </>
  );
};

export default TemplateSelection;
