import React, { useState } from "react";
import styles from "./ColorSelector.module.css";
import ColorButton from "../Buttons/ColorButton/ColorButton";
import OuterBody from "../Forms/OuterBody/OuterBody";
import { ColorPicker, Tooltip } from "antd";
import IconInfoCircleFilled from "@/components/icons/IconInfoCircleFilled";

const colors = [
  { id: 1, color: "#455a63" }, // Gray
  { id: 2, color: "#0289d1" }, // Blue
  { id: 3, color: "#d42f2f" }, // Red
  { id: 4, color: "#4cb04f" }, // Green
  { id: 5, color: "#785548" }, // Brown
  { id: 6, color: "#41a38b" }, // Pink
  { id: 7, color: "#f564ad" }, // Orange
  { id: 8, color: "#ff8a66" }, // Violet
  { id: 9, color: "#7a1fa1" }, // Purple
  { id: 10, color: "#3f51b5" }, // Light Green
];

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const colorHandler = (val: string, label: string) => {
    console.log(val, "VALUEEEE", label);
  };

  return (
    <div className="primaryFormBg rounded-xl p-10 w-full text-white">
      <h2 className="font-semibold">
        Personalize your Card by selecting colors and uploading an image.
      </h2>
      <div className="flex pt-8 items-start">
        <div className="flex items-center gap-x-1">
          <p className="font-bold leading-[0.8]">Colors:</p>

          <Tooltip
            title="Select a theme or choose your own color below."
            color="#252525"
          >
            <div className="h-6 w-6 cursor-pointer">
              <IconInfoCircleFilled />
            </div>
          </Tooltip>
        </div>
        <div className="flex flex-col ml-8">
          <div className="grid grid-cols-5 gap-8 ">
            {colors.map((cur) => {
              return (
                <div
                  onClick={() => {
                    setSelectedColor(cur.color);
                  }}
                  key={cur.id}
                  className={`rounded-md cursor-pointer flex justify-center bg-[#322f40] w-16 h-16 shadow-md border border-[#322f40] transition-all  hover:border hover:border-[var(--secondary)] ${
                    selectedColor == cur.color
                      ? "border-[var(--secondary)]"
                      : ""
                  }`}
                >
                  <div
                    style={{ backgroundColor: cur.color }}
                    className="w-[80%] h-6 mt-2 rounded-md "
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Input for color selection */}
          <div className="flex justify-between mt-8 ">
            <div className="max-w-[161px] w-full">
              <h6 className="mb-2 text-[1.1rem] font-semibold">Primary</h6>
              <ColorPicker format="hex" className="shadow-md" defaultValue="#1677ff" size="large" showText />
            </div>
            <div className="max-w-[161px] w-full">
              <h6 className="mb-2 text-[1.1rem] font-semibold">Button</h6>
              <ColorPicker format="hex" className="shadow-md" defaultValue="#1677ff" size="large" showText />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorSelector;
