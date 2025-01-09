import React, { useRef, useState } from "react";
import styles from "./UploadFile.module.scss";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

interface Props {
  title: string;
  changeHandler: (data: any) => void;
  extendedComponent?: React.ReactNode;
}

const UploadFile: React.FC<Props> = ({
  title,
  changeHandler,
  extendedComponent,
}) => {
  const [selectedFile, setSelectedFile] = useState<any>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  console.log(selectedFile?.name, selectedFile, "FILES_HERE");

  return (
    <div className="p-10 text-white">
      <h2 className="font-semibold">{title}</h2>
      <div className="mt-5 relative ">
        <div className=" absolute top-[50%] translate-y-[-50%] flex  text-gray-400 items-center  justify-between pl-8 pr-8 w-full">
          <p className="leading-4 font-medium">
            {selectedFile?.name
              ? selectedFile?.name
              : `Upload a PDF File upto 20MB.`}
          </p>
          <ButtonPrimary
            onClick={() => inputRef.current?.click()}
            className="rounded-md"
          >
            Upload PDF
          </ButtonPrimary>
        </div>
        <input
          ref={inputRef}
          type="file"
          className={styles.inputFile}
          onChange={(e) => {
            console.log(e.target.files?.item, "TESTING");
            setSelectedFile(e.target.files?.[0]);
            changeHandler(e.target.files?.[0]);
          }}
        />
      </div>
      {extendedComponent && <div className="mt-5">{extendedComponent}</div>}
    </div>
  );
};

export default UploadFile;
