import React, { useEffect, useState } from "react";
import styles from "./ColorSelector.module.css";
import { ColorPicker, Tooltip } from "antd";
import ColorSelectorDefaulColor from "./ColorSelectorDefaulColor";
import { IconInfoCircleFilled } from "@tabler/icons-react";

interface ColorSelectorProps {
  config: {
    type: "custom" | "button" | "line";
    colors: { id: string; primary: string; secondary?: string }[];
    header: string;
  };
  extendedComponent?: React.ReactNode;
  handleColorSelect: (color: {
    id: string;
    primary: string;
    secondary?: string;
  }) => void;
}

const ColorSelector = ({
  config: { type, colors, header },
  handleColorSelect,
  extendedComponent = null,
}: ColorSelectorProps) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const colorHandler = (val: string, label: string) => {
    console.log(val, "VALUEEEE", label);
  };

  useEffect(() => {
    handleColorSelect(selectedColor);
  }, [selectedColor]);

  return (
    <div className="primaryFormBg rounded-xl p-10 w-full text-white flex flex-col gap-y-5">
      <h2 className="font-semibold">{header}</h2>
      <div className="flex mt-4 items-start">
        <div className="flex items-center gap-x-1">
          <p className="font-bold leading-[0.8]">Colors:</p>

          <Tooltip
            title="Select a theme or choose your own color below."
            color="#252525"
          >
            <div className="h-6 w-6 cursor-pointer">
              <IconInfoCircleFilled  size='100%'/>
            </div>
          </Tooltip>
        </div>
        <div className="flex flex-col ml-8">
          <div className="grid grid-cols-5 gap-8 ">
            {colors.map((cur, i) => {
              return (
                <ColorSelectorDefaulColor
                  key={i}
                  selected={Boolean(selectedColor.id === colors[i].id)}
                  color={cur}
                  handleClick={() => setSelectedColor(cur)}
                  type={type}
                />
              );
            })}
          </div>

          {/* Input for color selection */}
          <div className="flex justify-between mt-8 ">
            <div className="max-w-[161px] w-full">
              <h6 className="mb-2 text-[1.1rem] font-semibold">Primary</h6>
              <ColorPicker
                format="hex"
                className="shadow-md"
                value={selectedColor.primary}
                onChange={(e) =>
                  setSelectedColor((prev) => ({
                    ...prev,
                    primary: "#" + e.toHex(),
                    id: "99",
                  }))
                }
                size="large"
                showText
              />
            </div>
            {type !== "custom" && (
              <div className="max-w-[161px] w-full">
                <h6 className="mb-2 text-[1.1rem] font-semibold">
                  {type === "button" ? "Button" : "Secondary"}
                </h6>
                <ColorPicker
                  format="hex"
                  className="shadow-md"
                  value={selectedColor.secondary}
                  onChange={(e) =>
                    setSelectedColor((prev) => ({
                      ...prev,
                      secondary: "#" + e.toHex(),
                      id: "99",
                    }))
                  }
                  size="large"
                  showText
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {extendedComponent && extendedComponent}
      {/* sassss */}
    </div>
  );
};

export default ColorSelector;
