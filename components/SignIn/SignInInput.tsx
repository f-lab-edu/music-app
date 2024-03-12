'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
// import { useRouter } from 'next/router'
import { Loading } from '@/components/Common/Loading'
export default function SignInInput() {
  const { data: session, status } = useSession()
  // const router = useRouter()
  const userEmail = session?.user?.email
  const onClickLoginRequest = async () => {
    const res: any = await signIn('kakao')

    console.log(res)

    // 에러 핸들링
    /*if (res.status === 401) {
      console.log('401 에러')
      router.reload()
    } else {
      router.push('/')
    }*/
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
      <div className="w-full">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center m-1">
            <button className="m-1" onClick={() => onClickLoginRequest()}>
              <Image src="/kakao_login.png" alt="kakao_login" width={183} height={45} />
            </button>
          </div>

          <div className="text-md text-center text-gray-500 m-3">or use your account</div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col w-1/2">
              <div className="flex flex-row p-1 m-2 ">
                <label className="text-xl w-1/4 flex justify-start items-center mr-2" htmlFor="email">
                  email
                </label>
                <input className="w-3/4 flex items-center px-3 py-3 m-1" id="email" type="email" placeholder="email" />
              </div>
              <div className="flex flex-row p-1 m-2">
                <label className="text-xl  w-1/4 flex justify-start items-center mr-2" htmlFor="password">
                  password
                </label>
                <input className="w-3/4 flex items-center px-3 py-3 m-1" id="password" type="password" placeholder="password" />
              </div>
            </div>
            <div className="flex justify-center p-3 rounded-md m-4 bg-slate-400 text-slate-100 font-medium hover:bg-slate-300 hover:text-slate-900 text-center">
              <button onClick={() => signIn()}> Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
