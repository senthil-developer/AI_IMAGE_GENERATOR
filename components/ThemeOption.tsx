'use client'

import React from 'react'
import Image from 'next/image'
import { useTheme } from './store/UseStore'

type Props = {
}

const ThemeOption = (props: Props) => {
  const themes = [
    {value : 'coastal',imgUrl: '/coastal.png'},
    {value : 'modern',imgUrl: '/modern.png'},
    {value : 'professional',imgUrl: '/professional.png'},
    {value : 'tribal',imgUrl: '/tribal.png'},
    {value : 'tropical',imgUrl: '/tropical.png'},
    {value : 'vintage',imgUrl: '/vintage.png'},
  ]
  const setTheme:any = useTheme ();
  const handleClick = (e:React.MouseEvent<HTMLDivElement,MouseEvent>) => {
    document.querySelector('.selected')?.classList.remove('selected');
    e.currentTarget.classList.add('selected');
    setTheme(e.currentTarget.lastChild?.textContent);
  }
  return (
    <div className='grid grid-cols-3 gap-4'>
      {themes.map((theme,index) => (
      <div className='flex flex-col items-center cursor-pointer transition-all group' key={index} onClick={handleClick}>
      <Image src={theme.imgUrl} className='rounded-lg group-hover:opacity-60' alt={theme.value && 'image'} width={300} height={200} />
      <p className='font-semibold'>{theme.value}</p>
      </div>))}
    </div>
  )
}

export default ThemeOption