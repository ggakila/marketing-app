import Link from 'next/link'

export default function Navbar() {
  return (
    
    <div className=' bg-white sticky flex justify-between w-full  px-10 sm:px-5 py-4 border-b-2 border-b-black z-50'>
      <Link href="/" className="logo text-2xl sm:text-4xl font-bold leading-normal tracking-wide">KuzaBiz</Link>
      <div className='flex items-center gap-5 sm:gap-10'>
        <a href="#contactUs" className='text-sm sm:text-lg font-semibold hover:border-b-2 hover:border-b-black'>Contact us</a>
        <Link href="/promptpage" className="bg-black text-white px-4 py-2 hover:text-black hover:bg-white border border-black font-semibold text-sm sm:text-lg">Get Started</Link>
        {/* <button className="bg-black text-white px-4 py-2 hover:text-black hover:bg-white border border-black font-semibold text-sm sm:text-lg rounded">Login</button> */}
      </div>
    </div>
    
  )
}
