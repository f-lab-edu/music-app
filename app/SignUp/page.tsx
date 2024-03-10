'use client'
import Image from 'next/image'
import SignUpInput from '../../components/SignUp/SignUpInput'
import React from 'react'
export default function signIn() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center content-center p-16">
      <div className="flex flex-row">
        <div className="flex m-3 items-center align-center">
          <Image src="./sound_icon.svg" alt="BeMusician_icon" width={300} height={300} />
        </div>
        <div className="flex flex-col w-full align-center m-2 justify-center">
          <div className="font-bold text-4xl mb-5">Be</div>
          <div className="font-bold text-4xl mb-5">Musician</div>
        </div>
      </div>
      <div className="w-full flex justify-center m-1">
        <div className="flex text-xl text-center">Welcome to music world!</div>
      </div>
      <SignUpInput />
    </main>
  )
}
