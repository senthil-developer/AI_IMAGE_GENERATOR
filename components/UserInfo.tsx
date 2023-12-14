'use client'
import React from 'react'
import {useUser,UserButton} from '@clerk/nextjs'
import Link from 'next/link'
import { SignInButton} from "@clerk/nextjs";

type Props = {}

const UserInfo = (props: Props) => {
    const {user} = useUser();
  return !user ? (
             <SignInButton mode='modal' afterSignInUrl='/' afterSignUpUrl='/'>
            <button className='bg-gray-500 hover:opacity-90 rounded- lg text-white font-semibold px-5 py-3'>Login</button>
         </SignInButton>
  ) : (
        <UserButton/> 
  )
}

export default UserInfo