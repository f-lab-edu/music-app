'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState, useRef } from 'react'
import Loading from '@/components/Common/Loading'
export default function SignUpInput() {
  const { data: session, status } = useSession()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const positionRef = useRef<HTMLInputElement>(null)

  const userEmail = session?.user?.email
  const signUp = async (): Promise<any> => {
    const payload: any = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      name: nameRef.current?.value,
      position: positionRef.current?.value
    }
    console.log(payload)

    const response = await fetch(`/api/user`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    console.log(data)

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!')
    }

    // Handle the response data here
  }
  if (status === 'loading') {
    return (
      <>
        <div className="w-full">
          <Loading />
        </div>
      </>
    )
  }

  if (status === 'authenticated') {
    return (
      <>
        <div className="w-full">
          <div className="flex flex-col w-full">
            <div className="text-md text-center text-gray-500 m-3">Signed in as {userEmail}</div>
            <div className="flex justify-center p-3 rounded-md m-3 bg-slate-400 text-slate-100 font-medium hover:bg-slate-300 hover:text-slate-900 text-center">
              <button onClick={() => signOut()}> Logout</button>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="w-full flex justify-center ">
        <div className="flex flex-col w-1/2 ">
          <div className="flex flex-row p-1 m-2 ">
            <label className="text-xl w-1/4 flex justify-start items-center mr-2" htmlFor="email">
              email
            </label>
            <input ref={emailRef} className="w-3/4 flex items-center px-3 py-3 m-1" id="email" type="email" placeholder="email" />
          </div>
          <div className="flex flex-row p-1 m-2">
            <label className="text-xl  w-1/4 flex justify-start items-center mr-2" htmlFor="password">
              password
            </label>
            <input ref={passwordRef} className="w-3/4 flex items-center px-3 py-3 m-1" id="password" type="password" placeholder="password" />
          </div>
          <div className="flex flex-row p-1 m-2">
            <label className="text-xl  w-1/4 flex justify-start items-center mr-2" htmlFor="name">
              name
            </label>
            <input ref={nameRef} className="w-3/4 flex items-center px-3 py-3 m-1" id="text" type="name" placeholder="name" />
          </div>
          <div className="flex flex-row p-1 m-2">
            <label className="text-xl  w-1/4 flex justify-start items-center mr-2" htmlFor="position">
              position
            </label>
            <input ref={positionRef} className="w-3/4 flex items-center px-3 py-3 m-1" id="position" type="text" placeholder="write your position" />
          </div>
          <div className="flex justify-center p-3 rounded-md m-4 bg-slate-400 text-slate-100 font-medium hover:bg-slate-300 hover:text-slate-900 text-center">
            <button onClick={async () => signUp()}> SignUp</button>
          </div>
        </div>
      </div>
    </>
  )
}
