import React from 'react'
import SingleUpload from '@/components/SingleUpload'
import SelectInput from '@/components/SelectInput'
import ThemeOption from '@/components/ThemeOption'
import GenerateBtn from '@/components/GenerateBtn'
import PreviewImg from '@/components/PreviewImg'


const RoomPage = () => {
  return (
    <div className='container mx-auto py-10'>
      <div className='w-full flex flex-col md:flex-row items-center md:items-stretch gap-20 px-10'>
        <div className='flex flex-col items-center gap-8 md:w-1/3'>
          <div className='flex flex-col items-center gap-5 w-full'>
            <h2 className='font-bold text-xl '>Upload a photo of your room</h2>
            <SingleUpload/>
          </div>
          <div className='flex flex-col items-center gap-5 w-full'>
            <h2 className='font-bold text-xl '>Select Room Type</h2>
            <SelectInput />
          </div>
          <div className='flex flex-col items-center gap-5 w-full'>
            <h2 className='font-bold text-xl '>Select Room Theme</h2>
            <ThemeOption />
          </div>
          <GenerateBtn/>
        </div>
        <div className='md:w-2/3 flex flex-col items-center md:pb-10'>
          <div className='hidden flex-col gap-5 text-center md:flex '>
            <h2 className='text-6xl font-bold'>Redesign your <span className='text-blue-500'>room</span> in seconds</h2>
            <p className='text-2xl'>Upload a room pic, specify the room type, and select your room theme to redesign</p>
          </div>
          <PreviewImg/>
        </div>
      </div>
    </div>
  )
}

export default RoomPage