import React from 'react'
import { IconBtn } from './IconBtn'

export const BtnGroup = () => {
  return (
    <div className='flex gap-2 align-start'>
      <a href='https://github.com/ConorMcD5612' target="_blank">
      <IconBtn name="GitHub" size={24} iconSrc="/icons/iconmonstr-github-1.svg" color="light-orange" />
      </a>
      <a href='/public/resume.pdf' download>
          <IconBtn name="Resume" size={24} iconSrc="/icons/iconmonstr-cv-3.svg" color="light-orange" />
          </a>  
          <IconBtn name="Email" size={24} iconSrc="/icons/iconmonstr-email-3.svg" color="light-orange" />
    </div>
  )
}
