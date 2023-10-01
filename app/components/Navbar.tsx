'use client'
import Link from '@/node_modules/next/link'
import React from 'react'
import {DiAppstore} from "react-icons/di";
import { usePathname } from "next/navigation";



const Navbar = () => {
const pathname = usePathname();
  return (
    <div className='w-full border-b border-gray-200'>
    <div className="m-auto gap-x-[30px] flex items-center h-[50px] w-4/5 text-gray-500 ">
        <Link href="/" className={`text-black ${pathname=="/"?'text-black underline font-bold':''}`}><DiAppstore className="text-2xl"/></Link>
        <Link href="/explore" className={`hover:text-black h-[50px] flex items-center ${pathname=="/explore"?'text-black border-b-2 border-black font-bold':''}`}>Explore</Link>
        <Link href="/problems" className={`hover:text-black h-[50px] flex items-center ${pathname=="/problems"?'text-black border-b-2 border-black font-bold':''}`}>Problems</Link>
        <Link href="/contest" className={`hover:text-black h-[50px] flex items-center ${pathname=="/contest"?'text-black border-b-2 border-black font-bold':''}`}>Contest</Link>
        <Link href="/interview" className={`hover:text-black h-[50px] flex items-center ${pathname=="/interview"?'text-black border-b-2 border-black font-bold':''}`}>Interview</Link>
        <Link href="/store" className={`hover:text-black h-[50px] flex items-center ${pathname=="/store"?'text-black border-b-2 border-black font-bold':''}`}>Store</Link>
    </div>
    </div>
  )
}

export default Navbar

// style={{margin:'auto',display:'flex',gap:'30px',height:'40px',alignItems:'center',width:'80%'}}