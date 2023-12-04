
import React from 'react'
import Room from '@/components/Room'

type Props = {
  onChange : any,
  options : any,
  defaultValue : any,
  Room : any,
}


const page = (props:Props) => {
  return (
    <Room/>
  )
}

export default page