'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
// import { useRouter } from 'next/router'
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
    return <p>Hang on there...</p>
  }

  if (status === 'authenticated') {
    return (
      <>
        <p>Signed in as {userEmail}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      <p>Not signed in.</p>
      <button onClick={() => onClickLoginRequest()}>Sign in</button>
    </>
  )
}
