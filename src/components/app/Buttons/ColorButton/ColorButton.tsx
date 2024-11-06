import React, { useState } from 'react';
import styles from "./ColorButton.module.css";

interface Props {
  label:string,
  colorValue: (val:string,label:string) => void
}

const ColorButton: React.FC<Props> = ({colorValue,label}) => {
  const [color, setColor] = useState("#000000"); // Default color is black

  // color change from color picker
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    colorValue(e.target.value,label)
  };

  // color change from color input
  const handleHexInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    colorValue(newColor,label)
  };


  return (
    <div className={styles.colorPickerContainer}>
      <h2>{label}</h2>
      <div className={styles.colorContainer}>
      <input 
        type="text" 
        value={color} 
        onChange={handleHexInputChange} 
        placeholder="#000000" 
        maxLength={7} 
        className={styles.hexInput}
      />
      <input 
        type="color" 
        value={color} 
        onChange={handleColorChange} 
        className={styles.colorInput}
      />
      </div>
 
    </div>
  );
};

export default ColorButton;
