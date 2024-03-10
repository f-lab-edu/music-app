// import { useRouter } from 'next/router'
import Image from 'next/image'
export default function Header() {
  // const router = useRouter()

  return (
    <>
      <div className="flex">
        <div className="flex w-full flex-row justify-between items-center">
          <a href="#" className="inline-block m-4 uppercase text-gray rounded-lg px-3 py-2 hover:bg-slate-100 hover:text-slate-900">
            <Image src="./home_icon.svg" alt="home" width={30} height={30} />
            <span className="sr-only">(current)</span>
          </a>
          <nav className="flex sm:justify-center space-x-4 m-4 ">
            {[
              ['Sign In', '/SignIn'],
              ['Sign Up', '/SignUp']
            ].map(([title, url]) => (
              <a key={`${title}`} href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
                {title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
