'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export default function Header() {
  const router = useRouter()
  const { data: session, status } = useSession()
  return (
    <>
      <div className="flex fixed w-full top-0 z-50">
        <div className="flex w-full flex-row justify-between items-center">
          <a href="/" className="inline-block m-4 uppercase text-gray rounded-lg px-3 py-2 hover:bg-slate-100 hover:text-slate-900">
            <Image src="./home_icon.svg" alt="home" width={30} height={30} />
          </a>
          <nav className="flex sm:justify-center space-x-4 m-4 ">
            {session && (
              <button onClick={() => router.back()} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
                Back
              </button>
            )}
            {!session && (
              <button onClick={() => signIn()} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
                Sign In
              </button>
            )}
            {session && (
              <button onClick={() => signOut()} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
                Sign Out
              </button>
            )}
            {!session && (
              <button onClick={() => router.push('/SignUp')} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
                Sign Up
              </button>
            )}
          </nav>
        </div>
      </div>
    </>
  )
}
