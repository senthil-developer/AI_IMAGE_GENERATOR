'use client'
import React from 'react'
import { useLoading,useOutput } from './store/UseStore'
import Image from 'next/image'

type Props = {}

const PreviewImg = (props: Props) => {
    const isLoading = useLoading((state:any)=>state.isLoading)
    const isGenerating = useLoading((state:any)=>state.isGenerating)
    const output = useOutput((state:any)=>state.output)
  return isLoading ? (
    <div className={`${isGenerating && 'animate-pulse'} w-[350px] h-[200px] md:w-[500px] md:h-[300px] my-auto bg-slate-500 rounded-lg flex items-center justify-center `}>
        <Image src='/couch.svg' alt="loading image" width={100} height={100}/>
    </div>
  ):(
    <div className='my-auto '>
        <Image src={output} alt="output" width={350} height={200} className='rounded-lg object-cover'/>
    </div>
  )
}

export default PreviewImg