import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {BsCodeSlash} from "react-icons/bs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CodeEditorWindow from './CodeEditorWindow'

function sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const CodeEditor = ({width,height,title}:{width:number,height:number,title:string}) => {
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("C++");
    const [savingToLocal,setSavingToLocal]=useState(false);
    const saveCodeToLocal=useCallback(async(data:string)=>{
        if(typeof window!==undefined ){
            setSavingToLocal(true);
            await sleep(1200);
            localStorage.setItem(title,data);
            setSavingToLocal(false);
        }
    },[]);
    const debounceCodeSave=useCallback((func:(data:string)=>void,delay:number)=>{
        let timerId:string | number | NodeJS.Timeout | undefined;
        const context=this;
        return function(data:string){
            clearTimeout(timerId);
            timerId=setTimeout(()=>{
                func.apply(context,[data])
            },delay);
        }
    },[saveCodeToLocal]);
    const debounceFunc=useMemo(()=>debounceCodeSave(saveCodeToLocal,1000),[debounceCodeSave]);
    const onChange = (action:string, data:string) => {
    switch (action) {
        case "code": {
        setCode(data);
        debounceFunc(data);
        break;
        }
        default: {
        console.warn("case not handled!", action, data);
        }
    }
    };
    useEffect(()=>{
        if(typeof window!==undefined){
            const savedCode=localStorage.getItem(title)??'';
            setCode(savedCode);
        }
    },[]);
    
  return (
    <div>
        <div className='max-w-full h-8 bg-gray-100 px-2 flex justify-between'>
            <div className='text-sm flex gap-2 items-center font-medium'><BsCodeSlash className="text-green-500"/>Code</div>
            <div>maximizer</div>
        </div>
        <div className='flex items-center h-8 text-gray-600 border-b-[1px] border-gray-100'>
            <div className='border-none'>
               <Select className="border-none border-0" onValueChange={(value:string)=>setLanguage(value)} defaultValue={language}>
                <SelectTrigger className="w-[120px] h-6 border-none border-0 ">
                    <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent className="border-none border-0">
                    <SelectItem value="C++" className="hover:cursor-pointer">C++</SelectItem>
                    <SelectItem value="java" className="hover:cursor-pointer">Java</SelectItem>
                    <SelectItem value="python" className="hover:cursor-pointer">Python</SelectItem>
                     <SelectItem value="javascript" className="hover:cursor-pointer">Javascript</SelectItem>
                </SelectContent>
                </Select>
            </div>
        </div>
        <div>
            <CodeEditorWindow
                code={code}
                onChange={onChange}
                language={language}
                width={width}
                height={height}
                savingToLocal={savingToLocal}
            />
        </div>
    </div>
  )
}

export default CodeEditor