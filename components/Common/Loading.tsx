import Image from 'next/image'
export default function Loading() {
  return (
    <>
      <div className="flex fixed w-full h-screen top-0 left-0 z-50 justify-center items-center">
        <Image src="/loading_3D.gif" alt="loading_3D" width={800} height={800} />
      </div>
    </>
  )
}
