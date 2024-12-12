import {
  IconInfoCircleFilled,
  IconPhotoUp,
  IconReload,
} from "@tabler/icons-react";
import React, { useRef, useState } from "react";
import ButtonPrimary from "../../ButtonPrimary/ButtonPrimary";
import { Button, Tooltip } from "antd";

const WelcomeScreenLogo = () => {
  const [welcomeScreen , setWelcomeScreen ] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file); 
      setWelcomeScreen(url); 
    }
  };

  return (
    <div className="p-10 text-white flex flex-col gap-y-5">
      <h2 className="font-semibold">
        Display your logo while your page is loading.
      </h2>

      <div className="mt-4 flex items-start">
        <div className="flex items-center gap-x-1">
          <p className="font-bold leading-[0.8]">Image:</p>

          <Tooltip
            title="Upload an image or logo from your computer. Images must be in .jpg or .png format."
            color="#252525"
          >
            <div className="h-6 w-6 cursor-pointer">
              <IconInfoCircleFilled size="100%" />
            </div>
          </Tooltip>
        </div>

        <div className="ml-8 max-w-[450px] flex items-center justify-space-between w-full">
     
          <div onClick={()=> inputRef.current?.click()} className="bg-[#eee] cursor-pointer mx-auto w-60 h-36 border border-gray-700 rounded-md flex items-center justify-center mb-6">
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            onChange={handleInputChange}
            accept="image/*"
            multiple={false}
          />
            <IconPhotoUp width={40} height={40} color="#5b5b5b" />
          </div>

          <div className="flex flex-col gap-y-1 items-center">
            <button onClick={()=> inputRef.current?.click()} className="bg-[var(--secondary)] px-[14px] py-[6px] text-lg rounded-[6px] flex items-center text-[var(--primary)] font-medium transition-all hover:bg-[#d6d1f7]">
            <IconReload className="mr-2" width={20} height={20} strokeWidth={2.5} /> Change 
            </button>
            <Button type="link" className="text-[var(--secondary)] font-normal text-[18px] transition-all p-0 hover:text-white">Preview</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreenLogo;
