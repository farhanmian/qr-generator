'use client'
import { IconCheck } from '@tabler/icons-react'
import React, { useEffect, useId, useRef, useState } from 'react'

interface CustomCheckboxProps {
    inputChange :(check:boolean)=> void
    label?:string
    defaultValue?:boolean
}

export default function CustomCheckbox({inputChange,label , defaultValue} : CustomCheckboxProps) {
    const [inputChecked , setInputChecked] = useState(defaultValue || false)
    const inputCheckbox = useRef<HTMLInputElement>(null)
    const uniqueId = useId()

    useEffect(()=>{
        inputChange(inputChecked)
    },[inputChecked])

  return (
    <div className='custom-checkbox-container flex items-center'>
    <div onClick={()=>inputCheckbox.current?.click()} className={`${inputChecked && 'custom-checkbox-checked'} border border-gray-700 p-[2px] hover:border-[var(--secondary)] bg-[#2d2b36] h-[22px] w-[22px] cursor-pointer rounded-md custom-checkbox `}>
       <input ref={inputCheckbox} id={uniqueId} type="checkbox" className='hidden' onChange={(e)=> setInputChecked(e.target.checked)} />
       {inputChecked &&  <IconCheck size='100%' />}
    </div>
    <label htmlFor={uniqueId} className={`select-none cursor-pointer ${!inputChecked && 'custom-checkbox-label' } ml-3 font-medium`}>{label}</label>
  </div>
  )
}
