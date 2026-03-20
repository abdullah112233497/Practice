'use client'
import React from 'react'
import Link from 'next/link'
// import { ImageUp } from 'lucide-react'
import { useState } from 'react'
export default function nav({cart}) {
  const [isopen, setisopen] = useState(false)
  const  [cartopen, setcartopen] = useState(false)
  return ( <div className='p-0 m-0 fixed w-full'>
      <nav className=" bg-gray-800 w-[40%] md:w-full text-white">
        
        <div className=' flex justify-between md:flex hidden'> 

     {/* LEFT : Logo + Brand */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" className="h-8 w-8 rounded-full"/>
            <span className="font-bold text-lg">Khaas Look</span>
          </div>
          <div className='flex justify-around'>
<Link href="/" className='px-4 py-2 transition-all  hover:bg-gray-500'>Home</Link>
  <Link href="/about" className='px-4 py-2 transition-all hover:bg-gray-500'>About</Link>
  <Link href="/contact" className='px-4 py-2 transition-all hover:bg-gray-500'>Contact</Link>
   <Link href="/product" className='px-4 py-2 transition-all hover:bg-gray-500'>Product</Link>
</div>
<button onClick={()=>(setcartopen(!cartopen))}  className='px-10 cursor-pointer'>Cart { cart.length}</button>

{cartopen&& (
  <div className='z-100 fixed p-5 right-11 top-8 w-50 bg-gray-600 rounded-2xl h-50 overflow-y-auto  scrollbar-thi'>
{cart.map((item)=>{
  return (
  <div className='flex justify-around max-h-100 ' key={item.id}>

    <span>{item.name }</span>
    <span>{item.price } </span>
  </div>
  )
})}
</div>)}
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
