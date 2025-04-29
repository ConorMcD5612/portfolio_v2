import React from 'react'
import { IconBtn } from './IconBtn'

export const BtnGroup = () => {
  return (
    <div className='flex gap-2 align-start'>
          <IconBtn name="GitHub" size={24} iconSrc="/icons/iconmonstr-github-1.svg" color="light-orange" />
          <IconBtn name="Resume" size={24} iconSrc="/icons/iconmonstr-cv-3.svg" color="light-orange" />
          <IconBtn name="Email" size={24} iconSrc="/icons/iconmonstr-email-3.svg" color="light-orange" />
    </div>
  )
}
