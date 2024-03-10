// import { useRouter } from 'next/router'
import Image from 'next/image'
export default function Header() {
  // const router = useRouter()

  return (
    <>
      <div className="flex">
        <div className="flex w-full flex-row justify-between items-center">
          <a href="#" className="inline-block m-4 uppercase font-bold text-gray">
            <Image src="./home_icon.svg" alt="home" width={30} height={30} />
            <span className="sr-only">(current)</span>
          </a>
          <div className="">
            <ul className="flex">
              <li className="m-4 flex flex-row">
                <a href="/SignIn" className="uppercase font-bold text-gray underline underline-offset-1">
                  Sign In
                </a>
              </li>
              <li className="m-4 flex flex-row">
                <a href="/SignUp" className="uppercase font-bold text-gray underline underline-offset-1">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
