'use client'
import React from 'react'
import Link from 'next/link'
// import { ImageUp } from 'lucide-react'
import { useState } from 'react'
export default function nav() {
  const [isopen, setisopen] = useState(false)
  return ( <div className='p-0 m-0'>
      <nav className=" bg-gray-800 w-[40%] md:w-full text-white">
        
        <div className=' flex justify-around md:flex hidden'> 
<Link href="/" className='px-4 py-2 transition-all  hover:bg-gray-500'>Home</Link>
  <Link href="/about" className='px-4 py-2 transition-all hover:bg-gray-500'>About</Link>
  <Link href="/contact" className='px-4 py-2 transition-all hover:bg-gray-500'>Contact</Link>
   <Link href="/product" className='px-4 py-2 transition-all hover:bg-gray-500'>Product</Link>

        </div>

  <button className='z-51 md:hidden w-full fixed right-0 text-right top-0 pr-5 p-2   bg-gray-900 ' onClick={()=>setisopen(!isopen)}>{!isopen ? 'X': 'Menu'}</button>
    {/* Mobile Sidebar - LOGIC FIXED HERE */}
        <div className={`fixed top-0 right-0 bg-gray-900 w-64 h-screen flex flex-col items-start md:hidden 
          z-50  transform transition-transform duration-300 ease-in-out 
          ${isopen ? 'translate-x-0' : 'translate-x-full'}`}> 
          
          <div className="mt-16 w-full flex flex-col"> {/* mt-16 taake button ke niche se start ho */}
            <Link href="/" onClick={() => setisopen(false)} className='px-6 py-4 hover:bg-gray-700 w-full border-b border-gray-800'>Home</Link>
            <Link href="/about" onClick={() => setisopen(false)} className='px-6 py-4 hover:bg-gray-700 w-full border-b border-gray-800'>About</Link>
            <Link href="/contact" onClick={() => setisopen(false)} className='px-6 py-4 hover:bg-gray-700 w-full border-b border-gray-800'>Contact</Link>
            <Link href="/product" onClick={() => setisopen(false)} className='px-6 py-4 hover:bg-gray-700 w-full'>Product</Link>
          </div>
        </div>
</nav>
    </div>
  )
}
