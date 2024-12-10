import React from 'react'
import FormPrimary from '@/components/partials/FormPrimary/FormPrimary'
import { FormFieldType } from '@/utils/types/types';
import UpdateProfile from '@/components/partials/InformationSection/UpdateProfile';
import { Divider } from 'antd';

export default function VCardInformationSection({formFields}: { formFields: FormFieldType[] }) {
  return (
    <div className='p-10'>
      <UpdateProfile toolTipText='Select an image for your vCard profile picture. Upload .jpg or .png file from your computer' />
      <Divider className='border-[#343045] my-[40px] mx-[20px] min-w-[auto] w-[auto]' />
    <FormPrimary fields={formFields} />
    </div>
  )
}
