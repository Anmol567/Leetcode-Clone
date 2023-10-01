"use client"
import Link from '@/node_modules/next/link'
import {DiAppstore} from "react-icons/di";
import {GrFormPrevious,GrFormNext} from 'react-icons/gr'
import {BiExpand} from "react-icons/bi"
import {TbPlayerTrackNextFilled} from "react-icons/tb";
import {AiOutlineCloudUpload} from "react-icons/ai";
import {LuTimer,LuTimerReset} from "react-icons/lu"
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';

const ProblemListNavbar = () => {
  const getLocalStorageTime=()=>{
    if((typeof window!=='undefined')){
      if(!localStorage.getItem('timerStartValue'))
       return '';
      const savedValue=JSON.parse(localStorage.getItem('timerStartValue'));
       return savedValue;
    }
   return '';
  }
  const [timerStartValue,setTimerStartValue]=useState(getLocalStorageTime);
  const [countDownTime,setCountDownTime]=useState([0,0,0]);
  const [showTimer,setShowTimer]=useState(false);
  const [hours,setHours]=useState('');
  const [minutes,setMinutes]=useState('');
  const [seconds,setSeconds]=useState('');
  useEffect(()=>{
   let timerId:NodeJS.Timeout;
   const getTimeValues=()=>{
     var now = new Date().getTime();
      var timeleft=now-timerStartValue;
      var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      return [hours,minutes,seconds];
   }
   const setTimeValues=(...args:number[])=>{
      setHours(("0"+args[0].toString()).slice(-2));
      setMinutes(("0"+args[1].toString()).slice(-2));
      setSeconds(("0"+args[2].toString()).slice(-2)); 
   }
   setTimeValues(...getTimeValues());
    timerId=setInterval(()=>{
       setTimeValues(...getTimeValues());
      },1000);
    return ()=>clearInterval(timerId);
  },[showTimer])
  const startTimer=async ()=>{
      if(!timerStartValue){
        var countDownDate=new Date().getTime();
        setTimerStartValue(countDownDate);
        localStorage.setItem('timerStartValue',JSON.stringify(countDownDate)); 
      }
      setShowTimer(true); 
  }
  return (
    <div className='h-8 bg-gray-100 px-9 pb-2 pt-8 flex items-center'>
         <div className='flex items-center pb-2'>
         <Link href="/"><DiAppstore className="text-2xl border-r-2 border-gray-300 w-8"/></Link>
         <Link href="/problems" className='hover:bg-gray-200 hover:rounded p-1 flex h-8 items-center ml-4'><BiExpand/><span className="ml-2 font-medium">Problem List</span></Link>
         <Link href="" className='hover:bg-gray-200 hover:rounded p-2 h-8 flex items-center ml-2'><GrFormPrevious/><span className="font-medium"></span></Link>
         <Link href="" className='hover:bg-gray-200 hover:rounded p-2 h-8 flex items-center'><GrFormNext/><span className="font-medium"></span></Link>
         </div>
         <div className='ml-auto mr-auto flex items-center pb-2'>
          <Button variant="ghost" className='flex bg-gray-200 rounded px-4 h-8 hover:bg-gray-300 ml-1'><TbPlayerTrackNextFilled />Run</Button>
          <Button variant="ghost" className='flex bg-gray-200 text-green-600 h-8  hover:text-green-600 rounded px-4 hover:bg-gray-300 ml-1'><AiOutlineCloudUpload />Submit</Button>
          <div className='flex'>
          <Button variant="ghost" className='flex bg-gray-200 rounded px-4 h-8 hover:bg-gray-300 ml-1' onClick={()=>{
            if(!showTimer){
              startTimer();
            }else{
              setShowTimer(false);
            }
            
          }}><LuTimer />{showTimer&&(<span className='ml-2 flex'><span className='w-'>{hours}</span>:<span className='w-5'>{minutes}</span>:<span className='w-5'>{seconds}</span></span>)}</Button>
          {showTimer&&<Button variant="ghost" onClick={()=>{
            setTimerStartValue('');
            setShowTimer(false);
            localStorage.setItem('timerStartValue','');
          }}className='flex bg-gray-200 rounded px-4 h-8 hover:bg-gray-300 ml-2' ><LuTimerReset /></Button>}
          </div>
        </div>
        <div className="w-72"></div>
    </div>
  )
}

export default ProblemListNavbar