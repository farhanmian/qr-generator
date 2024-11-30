import React, { useState } from "react";
import styles from "./ColorSelector.module.css";
import ColorButton from "../Buttons/ColorButton/ColorButton";
import OuterBody from "../Forms/OuterBody/OuterBody";

const colors = [
  { id: 1, color: "#808080" }, // Gray
  { id: 2, color: "#0000FF" }, // Blue
  { id: 3, color: "#FF0000" }, // Red
  { id: 4, color: "#008000" }, // Green
  { id: 5, color: "#A52A2A" }, // Brown
  { id: 6, color: "#FFC0CB" }, // Pink
  { id: 7, color: "#FFA500" }, // Orange
  { id: 8, color: "#EE82EE" }, // Violet
  { id: 9, color: "#800080" }, // Purple
  { id: 10, color: "#90EE90" }, // Light Green
];

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const colorHandler = (val: string, label: string) => {
    console.log(val, "VALUEEEE", label);
  };

  return (
    <div className="primaryFormBg rounded-xl p-10 w-full border border-primary">
      Personalize your Card by selecting colors and uploading an image.
      <div className="flex pt-10">
        Colors ?:
        <div className="ml-6 grid grid-cols-5 gap-10 justify-between">
          {colors.map((cur) => {
            return (
              <div
                onClick={() => {
                  setSelectedColor(cur.color);
                }}
                key={cur.id}
                className={`cursor-pointer flex justify-center bg-gray-300 w-16 h-16 border-2  hover:border-2 hover:border-black ${
                  selectedColor == cur.color ? "border-black" : ""
                }`}
              >
                <div
                  style={{ backgroundColor: cur.color }}
                  className="w-[80%] h-6 mt-2"
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Input for color selection */}
      <div className="ml-6 pl-[64px] flex justify-between w-[80%]">
        <ColorButton label="Primary" colorValue={colorHandler} />
        <ColorButton label="Button" colorValue={colorHandler} />
      </div>
    </div>
  );
};

export default ColorSelector;
