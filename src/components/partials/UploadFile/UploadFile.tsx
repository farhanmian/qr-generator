import React, { useState } from "react";
import styles from "./UploadFile.module.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

interface Props {
  title: string;
}

const UploadFile: React.FC<Props> = ({ title }) => {
  const [selectedFile, setSelectedFile] = useState<any>();

  console.log(selectedFile?.name, selectedFile, "FILES_HERE");

  return (
    <div className="p-10 text-white">
      <h2 className="font-semibold">{title}</h2>
      <div className="py-11 relative ">
        <div className="pointer-events-none absolute top-[35%] flex  text-gray-400 items-center justify-between pl-8 pr-8 w-full">
          <p>
            {selectedFile?.name
              ? selectedFile?.name
              : `Upload a PDF File upto 20MB.`}
          </p>
          <ButtonPrimary> Upload PDF</ButtonPrimary>
        </div>
        {/* */}
        <input
          type="file"
          className={styles.inputFile}
          onChange={(e) => {
            console.log(e.target.files?.item, "TESTING");
            setSelectedFile(e.target.files?.[0]);
          }}
        />
      </div>
    </div>
  );
};

export default UploadFile;
