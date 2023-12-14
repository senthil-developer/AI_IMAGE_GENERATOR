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
            <button className='bg-blue-500 rounded-sm hover:opacity-90 font-semibold py-3 px-5 '>Login</button>
         </SignInButton>
  ) : (
        <UserButton/> 
  )
}

export default UserInfo