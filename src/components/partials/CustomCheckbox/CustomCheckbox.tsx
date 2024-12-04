'use client'
import IconCheck from '@/components/icons/IconCheck'
import React, { useEffect, useRef, useState } from 'react'

interface CustomCheckboxProps {
    inputChange :(check:boolean)=> void
}

export default function CustomCheckbox({inputChange} : CustomCheckboxProps) {

    const [inputChecked , setInputChecked] = useState(false)
    const inputCheckbox = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        inputChange(inputChecked)
    },[inputChecked])


  return (
    <div className='custom-checkbox-container flex items-center'>
    <div onClick={()=>inputCheckbox.current?.click()} className={`${inputChecked && 'custom-checkbox-checked'} border border-gray-700 p-[2px] hover:border-[var(--secondary)] bg-[#2d2b36] h-[22px] w-[22px] cursor-pointer rounded-md custom-checkbox `}>
       <input ref={inputCheckbox} id='checkbox' type="checkbox" className='hidden' onChange={(e)=> setInputChecked(e.target.checked)} />
       {inputChecked &&  <IconCheck />}
    </div>
    <label htmlFor="checkbox" className={`select-none cursor-pointer ${!inputChecked && 'custom-checkbox-label' } ml-3 font-medium`}>Add a share button to the page</label>
  </div>
  )
}
