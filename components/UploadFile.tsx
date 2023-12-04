'use client'

import { UploadDropzone } from '@bytescale/upload-widget-react'
import Image from 'next/image'
import { useState } from 'react'
import { useImage } from './store/UseStore'

type Props = {}

const UploadFile = (props: Props) => {
  const [preview, setPreview] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const setImageUrl = useImage((state:any)=>state.setImageUrl);
  const options :any =  {
    apiKey : process.env.NEXT_PUBLIC_BYTESCALE_API_KEY,
    editor :{
        images :{
            crop:false,
        }
    },
    maxFileCount:1,
  }
 
function onUpdate({uploadedFiles}:any){
    if(uploadedFiles.length !== 0){
    const imageUrl = uploadedFiles[0].fileUrl;
    setPreview(imageUrl);
    setImageUrl(imageUrl);
    }
  }


  return preview ? (
    <div className='relative max-w-[500px] max-h-[300px] flex items-center justify-center'>
        {loading && <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-slate-300 animate-pulse'></div>}
        <Image src={preview} alt="preview" className=' rounded-md object-cover dark:bg-white bg-black' onLoad={() => setLoading(false)} width={300} height={200} />
        <button onClick={() => {setPreview(''); setLoading(true)}} className='absolute top-4 right-4 z-10 backdrop-blur-md rounded-full'>
          <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-red-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg> 
        </button>
    </div>
  ) 
  : (
    <div>
        <UploadDropzone options={options} onUpdate={onUpdate} width='400px' height='200px' />
    </div>
  )
}

export default UploadFile