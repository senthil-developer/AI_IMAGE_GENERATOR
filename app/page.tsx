import ComparesSlider from '@/components/ComparesSlider'
import Link from 'next/link'
import { SignInButton} from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="w-full h-full mx-auto flex items-center gap-10 p-11 lg:flex-row flex-col justify-center lg:justify-around">
      <div className='flex relative max-w-xl flex-col items-center gap-5 gradient-bg rounded-lg'>
        <h1 className='text-5xl text-center font-bold '>Redesign your Image in seconds{' '}<span className='text-blue-700'>Using AI</span></h1>
        <p className='text-gray-500 text-lg text-center'>
          took a picture of a room and instantly redesign it in 8+ different themes options.Join thousand of happy customers and remodel your dream house today.
        </p>
         <SignInButton mode='modal' afterSignInUrl='/room' afterSignUpUrl='/room'>
            <button className='bg-blue-500 rounded-sm hover:opacity-90 font-semibold py-3 px-5 '>Redesign your room</button>
         </SignInButton>
      </div>
      {/* compare slider component */}
      <div>
        <ComparesSlider/>
      </div>
    </main>
  )
}
