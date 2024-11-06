'use client'
import ColorSelector from '@/components/app/ColorSelector/ColorSelector';
import React from 'react';

const VcardPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  console.log(slug, "slug");

  const submitHandler = () =>{

  }

  return (
    <div className='flex justify-center'>
      {slug ? `Vcard for: ${slug}` : "No slug provided"}

     
      <ColorSelector />
      <form>
        
      </form>
    </div>
  );
}

export default VcardPage;
