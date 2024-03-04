import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center content-center p-16">
      <div className="flex flex-col w-full items-center content-center">
        <div className="font-bold w-full text-center text-2xl mb-8">MAIN PAGE</div>
        <button>LOGOUT</button>
      </div>
    </main>
  )
}
