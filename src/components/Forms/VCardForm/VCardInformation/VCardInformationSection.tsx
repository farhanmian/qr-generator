import React from 'react'
import FormPrimary from '@/components/partials/FormPrimary/FormPrimary'
import { FormFieldType } from '@/utils/types/types';
import { Divider } from 'antd';
import VCardUpdateProfile from './VCardUpdateProfile';
import AddButton from '@/components/partials/AddButton';

export default function VCardInformationSection({formFields}: { formFields: FormFieldType[] }) {
  return (
    <div className='p-10'>
      <VCardUpdateProfile toolTipText='Select an image for your vCard profile picture. Upload .jpg or .png file from your computer' />
      <Divider className='border-[#343045] my-[40px] mx-[20px] min-w-[auto] w-[auto]' />
    <FormPrimary fields={formFields} submitHandler={()=>{}} />
    <Divider className='border-[#343045] my-[40px] mx-[20px] min-w-[auto] w-[auto]' />
    </div>
  )
}
