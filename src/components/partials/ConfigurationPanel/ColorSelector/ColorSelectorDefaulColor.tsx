import { IconCheck } from '@tabler/icons-react'
import React from 'react'

interface ColorSelectorDefaulColorProps {
    color:{primary:string , secondary?:string}
    selected: boolean
    handleClick:()=>void
    type: 'custom' | 'button' | 'line'
}

export default function ColorSelectorDefaulColor({color , selected,handleClick ,type} : ColorSelectorDefaulColorProps) {
  return (
    <div
    onClick={handleClick}
    className={`${selected ? 'border-[#12a648]' : 'border-gray-700 hover:border-[var(--secondary)]'} relative  p-2 rounded-md cursor-pointer flex flex-col justify-between items-end  bg-[#322f40] w-16 h-16 shadow-md border  transition-all `}
  >
    {selected && <div className='bg-[#12a648] h-5 w-5 p-1 rounded-full absolute top-[-10px] right-[-10px] text-white'>{<IconCheck size='100%' strokeWidth={3} />}</div>}
    <div
      style={{ backgroundColor: color.primary }}
      className=" h-6 w-full  rounded-md "
    />

    { type !== 'custom' && <div
      style={{ backgroundColor: color.secondary }}
      className={type === 'button' ? ' h-3 w-3 rounded-full' : 'h-2 w-[80%] self-center rounded-md mb-1'}
    />}
  </div>
  )
}
