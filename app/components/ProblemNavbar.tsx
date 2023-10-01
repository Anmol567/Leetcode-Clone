
import React from 'react'
import {TbFileDescription} from "react-icons/tb";
import {AiOutlineSolution} from "react-icons/ai"
import {RxCountdownTimer} from "react-icons/rx"
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from '@/node_modules/next/link';

const ProblemNavbar = ({title}:{title:string}) => {
  return (
    <div className='px-2 py-1 bg-gray-100 h-8 items-center flex sticky top-0'>
        <Link href={`/${title}/description`} className='flex'><Button variant="ghost" className='hover:bg-gray-200 pr-0 h-6'><TbFileDescription className="text-lg text-blue-500 mr-1"/><span className='border-r-2 pr-4'>Description</span></Button></Link>
        <Link href={`/${title}/editorial`} className='flex'><Button variant="ghost" className='hover:bg-gray-200 pr-0 h-6'><TbFileDescription className="text-lg text-blue-500 mr-1"/><span className='border-r-2 pr-4'>Editorial</span></Button></Link>
        <Link href={`/${title}/solutions`} className='flex'><Button variant="ghost" className='hover:bg-gray-200 pr-0 h-6'><AiOutlineSolution className="text-lg text-blue-500 mr-1"/><span className='border-r-2 pr-4'>Solutions</span></Button></Link>
        <Link href={`/${title}/submissions`} className='flex'><Button variant="ghost" className='hover:bg-gray-200 pr-0 h-6'><RxCountdownTimer className="text-lg text-blue-500 mr-1"/><span className=' pr-4'>Submissions</span></Button></Link>
    </div>
  )
}

export default ProblemNavbar