'use client'
import SignInInput from '../../components/SignIn/SignInInput'
import React from 'react'
export default function login() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center content-center p-16">
      <div className="flex flex-col w-full items-center content-center">
        <div className="font-bold w-full text-center text-2xl mb-8">Welcome to Musician App</div>
        <div className="font-semibold w-full text-center text-xl">Sign in/up</div>
        <SignInInput />
      </div>
    </main>
  )
}
