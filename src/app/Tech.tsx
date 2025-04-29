import React from 'react'

export const Tech = ({tech} : {tech: string[];}) => {
  const tech_text = tech.join(", ")
  return (
    <div className='italic'>
    {tech_text}
    </div>
  )
}
