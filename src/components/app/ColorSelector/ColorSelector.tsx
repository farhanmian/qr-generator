import React, { useState } from "react";
import styles from "./ColorSelector.module.css";


const colors = [
  { id: 1, color: '#808080' }, // Gray
  { id: 2, color: '#0000FF' }, // Blue
  { id: 3, color: '#FF0000' }, // Red
  { id: 4, color: '#008000' }, // Green
  { id: 5, color: '#A52A2A' }, // Brown
  { id: 6, color: '#FFC0CB' }, // Pink
  { id: 7, color: '#FFA500' }, // Orange
  { id: 8, color: '#EE82EE' }, // Violet
  { id: 9, color: '#800080' }, // Purple
  { id: 10, color: '#90EE90' } // Light Green
];



const ColorSelector = () => {

  return (
    <div className={styles.container}>
      <div className="flex bg-primary py-4 border- border-2">
        <p className="mr-4 ml-2">Logo</p>
        <p className="">Design & customize your Vcard</p>
      </div>
      <div className="bg-purpleLight h-[400px] pl-[64px] pt-2">
        Personalize your Card by selecting colors and uploading an image.
        <div className="flex pt-10">
          Colors ?:
          <div className="ml-6 grid grid-cols-5 gap-10 justify-between">
            {/* color 1 */}

            {colors.map((cur) => {
              return (
                <div key={cur.id} className="flex justify-center bg-gray-300 w-16 h-16">
                  <div style={{ backgroundColor: cur.color }} className="w-[80%] h-6 mt-2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorSelector;
