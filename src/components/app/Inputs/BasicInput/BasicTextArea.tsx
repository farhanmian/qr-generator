import React from 'react'
import {Input} from "antd"
import styles from './BasicInput.module.css'
import TextArea from 'antd/es/input/TextArea'

interface Props {
className?:any
placeholder?:string
field:any
}


const BasicTextArea : React.FC<Props> = ({className,placeholder,field}) => {

  const classes = className

  return (
    <div>
      <TextArea className={`${styles.inputCntainer} ${classes}`} placeholder={placeholder} {...field} />
    </div>
  )
}

export default BasicTextArea