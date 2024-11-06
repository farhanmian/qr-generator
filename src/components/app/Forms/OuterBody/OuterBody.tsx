import React from 'react'
import styles from "./OuterBody.module.css";

interface Props {
    children:any
    logo:string,
    heading:string
}

const OuterBody :React.FC<Props> = ({children,heading,logo}) => {
  return (
    <div className={`${styles.container} border-[1px]`}>
    <div className="flex bg-primary py-4 border-b-[1px]">
      <p className="mr-4 ml-2">{logo}</p>
      {/* <p className="">Design & customize your Vcard</p> */}
       <p className="">{heading}</p>

    </div>

    {children}
   
  </div>  )
}

export default OuterBody