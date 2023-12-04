'use client'
import React from 'react'
import {useUser,UserButton} from '@clerk/nextjs'
import Link from 'next/link'
type Props = {}

const UserInfo = (props: Props) => {
    const {user} = useUser();
  return !user ? (
    <Link href='/room' className='bg-gray-500 hover:opacity-90 rounded-lg text-white font-semibold px-5 py-3'>
        Login 
    </Link>
  ) : (
        <UserButton/> 
  )
}

export default UserInfo