"use client";
import { IconChevronDown } from "@tabler/icons-react";
import { Select } from "antd";
import React, { useState } from "react";
import BasicInput from "./Inputs/BasicInput/BasicInput";

export default function AddButton({defaultTitle}:{defaultTitle:string}) {
  const [showConfiguration, setShowConfiguration] = useState(false);
  const [buttonInfo ,setButtonInfo] = useState({title:defaultTitle,link:''})

  const handleButtonInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setButtonInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex text-white ">
      <div className="flex items-center gap-x-1  ">
        <p className="font-bold leading-[0.8]">Button:</p>
      </div>

      <div className="ml-[56px] flex gap-x-[50px] items-center w-full h-[117px]">
        {!showConfiguration && (
          <button
            onClick={() => setShowConfiguration(true)}
            className="whitespace-nowrap underline text-[var(--secondary)] text-[18px] transition-all hover:brightness-125"
          >
            Add Button
          </button>
        )}

        {showConfiguration &&  
        <div className="w-full flex flex-col items-end ">
        <div className="flex justify-between w-full gap-x-4">
          <div className="space-y-2 w-full">
            <p className="font-medium">Title</p>
            <BasicInput name="title" onChange={handleButtonInfoChange} value={buttonInfo.title} />
          </div>
          <div className="space-y-2 w-full">
            <p className="font-medium">Link</p>
            <BasicInput name="link" onChange={handleButtonInfoChange}  value={buttonInfo.link} placeholder="http://www.example.com" />
          </div>
        </div>
        <button
            onClick={() => {
                setShowConfiguration(false)
                setButtonInfo({title:defaultTitle , link:''})
            }}
            className="mt-2 whitespace-nowrap underline text-[var(--secondary)] text-[18px] transition-all hover:brightness-125"
          >
            Remove Button
          </button>
        </div>
        }
      </div>
    </div>
  );
}
