"use client";
import ProblemNavbar from '@/app/components/ProblemNavbar';
import Image from '@/node_modules/next/image';
import Split from 'react-split';
import React, { useEffect, useRef, useState } from 'react'
import './page.css'
import CodeEditor from '@/app/components/CodeEditor';


const testCases:{input:string,output:string,explaination?:string,img?:string}[]=[
  {
    input:'l1 = [2,4,3], l2 = [5,6,4]',
    output:'[7,0,8]',
    explaination:'342 + 465 = 807.',
    img:''
  },
  {
    input:'l1 = [0], l2 = [0]',
    output:'[0]',
    explaination:'342 + 465 = 807.',
    img:''
  },{
    input:'l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]',
    output:'[8,9,9,9,0,0,0,1]',
    img:''
  }
]

const page = ({params}:{params:{title:string}}) => {
  const [horizontalSizes,setHorizontalSizes] =useState([50,50]);
  const [verticalSizes,setVerticalSizes] =useState([60,40]);
  useEffect(() => {
    if(typeof window!=='undefined'){
      var splitString:string=localStorage?.getItem('split-sizes-horizontal')??'';
      if(splitString)
      setHorizontalSizes(JSON.parse(splitString));
      splitString=localStorage?.getItem('split-sizes-vertical')??'';
      if(splitString)
      setVerticalSizes(JSON.parse(splitString));
    }
    }, []);
  return (
    <div className="w-[100vw] h-[calc(100vh-2rem)] bg-gray-100 p-[1vw] flex overflow-hidden">
     <Split 
      sizes={horizontalSizes} 
      className="split"
      direction="horizontal" 
      onDragEnd={(sizes:[])=>{
        localStorage?.setItem('split-sizes-horizontal', JSON.stringify(sizes));
        setHorizontalSizes(sizes);
      }}>
        <div className='h-full bg-white rounded border-gray-200 border overflow-y-scroll overflow-x-hidden'>
             <ProblemNavbar title={params.title}/>
             <div className='w-full h-full py-6'>
              <div className='font-semibold text-2xl px-6 capitalize'>{params.title.replace(/-/g," ")}</div>
              <div className='px-6 py-8 text-balck-100'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tincidunt arcu, a suscipit quam. Vivamus lacinia nisi eu tellus luctus, eu vehicula quam dignissim. Nulla facilisi. Sed in ex nec justo faucibus suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In nec consectetur orci. Duis vel erat sit amet ligula ultricies scelerisque. Nullam a nibh a augue ultrices iaculis id non purus. Sed tincidunt lectus sit amet est eleifend, et condimentum velit feugiat. Vivamus eget fermentum purus. Maecenas condimentum, odio ac blandit ullamcorper, sem erat condimentum neque, non tincidunt tellus elit id orci. Maecenas placerat libero in elit auctor venenatis.
              </div>
              {testCases?.map((testcase,id)=>{
                return (
                  <div className='px-6'>
                  <div className='py-4 font-bold'>
                    Example: {id+1}
                  </div>
                  {testcase.img&&(
                    <div className='py-2'>
                      <Image src={testcase.img} width={300} height={300} alt={params.title}/>
                    </div>
                  )}
                    <div className='border-gray-100 border-l-2'>
                        <div className='ml-2 flex'>
                          <span className='mr-2'>Input:</span>
                          <span  className='text-gray-500'>{testcase.input}</span>
                        </div>
                        <div className='ml-2 flex'>
                          <span className='mr-2'>Explaination: </span>
                          <span className='text-gray-500'>{testcase.explaination}</span>
                        </div>
                        <div className='ml-2 flex'>
                          <span className='mr-2'>Output: </span>
                          <span className='text-gray-500'>{testcase.output}</span>
                        </div>
                  </div>
              </div>
              )})}
            </div>
        </div>
        <Split 
            sizes={verticalSizes} 
            className="split1"
            direction="vertical" 
            onDragEnd={(sizes:[])=>{
              localStorage?.setItem('split-sizes-vertical', JSON.stringify(sizes));
              setVerticalSizes(sizes);
          }}>
          <div className='bg-white rounded border-gray-200 border overflow-y-hidden'>
                <CodeEditor width={horizontalSizes[1]} height={verticalSizes[0]} title={params.title}/>
          </div>
          <div className='bg-white rounded border-gray-200 border'>  
          </div>
        </Split>
        </Split>
      </div>
  )
}

export default page