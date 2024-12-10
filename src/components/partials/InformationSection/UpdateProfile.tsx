"use client";

import { Avatar, Tooltip, Upload } from "antd";
import React, { useEffect, useRef, useState } from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import IconInfoCircleFilled from "@/components/icons/IconInfoCircleFilled";
import IconPlus from "@/components/icons/IconPlus";
import IconX from "@/components/icons/IconX";

export default function UpdateProfile({
  toolTipText,
}: {
  toolTipText: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [profileUrl, setProfileUrl] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file); 
      setProfileUrl(url); 
    }
  };

  const handleRemoveCurrentfile = () => {
    setProfileUrl("");
    inputRef.current!.value = "";
  };

  return (
    <div className="flex text-white ">
      <div className="flex items-center gap-x-1 ">
        <p className="font-bold leading-[0.8]">Image:</p>

        <Tooltip title={toolTipText} color="#252525">
          <div className="h-6 w-6 cursor-pointer">
            <IconInfoCircleFilled />
          </div>
        </Tooltip>
      </div>
      <div className="ml-[42px] flex gap-x-[50px] items-center">
        <div className="relative">
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            onChange={handleInputChange}
            accept="image/*"
            multiple={false}
          />
          <div
            onClick={() => inputRef.current?.click()}
            className="h-[88px] w-[88px] bg-[var(--primary)] cursor-pointer rounded-full flex items-center justify-center overflow-hidden border border-dashed transition-all border-white hover:border-slate-300 hover:text-slate-300 "
          >
            {profileUrl ? (
              <img
                src={profileUrl}
                alt="test"
                className="w-full h-full cover"
              />
            ) : (
              <p className="text-[14px] text-center text-medium">
                No Image Uploaded
              </p>
            )}
          </div>
          {/* <Avatar
            onClick={() => inputRef.current?.click()}
            size={84}
            className="text-[12px] bg-[var(--primary)]  border border-gray-700 cursor-pointer"
            src={
          profileUrl && "https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg"
            }
          >
            No Image Uploaded
          </Avatar> */}
          {Boolean(profileUrl) && (
            <button
              onClick={handleRemoveCurrentfile}
              className="h-5 w-5 bg-red-700 rounded-full p-[2px] flex items-center justify-center absolute top-0 right-0"
            >
              <IconX />
            </button>
          )}
        </div>

        <button
          onClick={() => inputRef.current?.click()}
          className="bg-[var(--secondary)] px-3 py-1 rounded-[5px] text-[var(--primary)] font-medium transition-all hover:bg-[#d6d1f7]"
        >
          Upload
        </button>
      </div>
    </div>
  );
}
