"use client";

import { Avatar, Tooltip, Upload } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { IconInfoCircleFilled, IconX } from "@tabler/icons-react";

export default function VCardUpdateProfile({
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
            <IconInfoCircleFilled  size='100%'/>
          </div>
        </Tooltip>
      </div>
      <div className="ml-[34px] flex gap-x-[50px] items-center">
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
            className="h-[92px] w-[92px] bg-[var(--primary)] cursor-pointer rounded-full flex items-center justify-center overflow-hidden border border-dashed transition-all border-white hover:border-slate-300 hover:text-slate-300 "
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
          
          {Boolean(profileUrl) && (
            <button
              onClick={handleRemoveCurrentfile}
              className="h-5 w-5 bg-red-700 rounded-full p-[2px] flex items-center justify-center absolute top-0 right-0"
            >
              <IconX size={'100%'} />
            </button>
          )}
        </div>

        <button
          onClick={() => inputRef.current?.click()}
          className="bg-[var(--secondary)] px-4 py-2 rounded-[5px] text-[var(--primary)] font-medium transition-all hover:bg-[#d6d1f7]"
        >
          Upload
        </button>
      </div>
    </div>
  );
}
