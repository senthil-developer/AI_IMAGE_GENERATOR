'use client'

import React from 'react'
import { useImage, useLoading, useOutput, useRoom, useTheme } from './store/UseStore'

type Props = {}

const GenerateBtn = (props: Props) => {
    const imageUrl = useImage((state:any)=>state.imageUrl)
    const theme = useTheme((state:any)=>state.theme)
    const room = useRoom((state:any)=>state.room)
    const setOutput = useOutput((state:any)=>state.setOutput)
    const setLoading = useLoading((state:any)=>state.setLoading)
    const setGenerating = useLoading((state:any)=>state.setLoading)

    const handleClick = async () => {
        if(imageUrl && theme){
            setLoading(true);
            setGenerating(true);
            const res =  await fetch('/api/dream',{
                method : 'POST',
                headers :{
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    theme,
                    room,
                    imageUrl
                })
            })
            const newImage = await res.json();
            setLoading(false);
            setOutput(newImage[1]);
        }
    } 
  return (
    <button className={`${imageUrl && theme ? '' : 'cursor-not-allowed'} p-5 w-full bg-blue-700 rounded-lg hover:opacity-90 active:scale-[.98] transition`} onClick={handleClick}>
        Generate Image
    </button>
  )
}

export default GenerateBtn