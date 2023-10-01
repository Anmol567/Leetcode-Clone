"use client"

import { ColumnDef } from "@tanstack/react-table"
import {FaLock} from "react-icons/fa";
import {AiOutlineSolution} from "react-icons/ai"
import { Button } from "@/components/ui/button"
import Link from '@/node_modules/next/link'
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Problem = {
  id: number
  title: string
  solution: boolean
  acceptance: string
  difficulty:"Easy"|"Medium"|"Hard"
  frequency:number|"locked"
}

export const columns: ColumnDef<Problem>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "title",
    header: "Title",
    cell:({row})=>{
        const title=row.getValue("title");
        return <Link href={`/${title.toLowerCase().replace(/\s+/g, '-')}/description`} className="text-blue-500 hover:text-blue-800 text-md font-medium">{title}</Link>
    }
  },
  {
    accessorKey: "solution",
    header: "Solution",
    cell: ({ row }) => {
      const solution = row.getValue("solution");
      return <div className={`flex items-center justify-start w-16 text-xl hover:cursor-pointer `}>
          <AiOutlineSolution />
      </div>
    },
  },
  {
    accessorKey: "acceptance",
    header: ({column})=>{
        return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Acceptance
        </Button>
      )
    },
    cell: ({ row }) => {
      const acceptance = row.getValue("acceptance");
      return <div className="ml-4">{acceptance}</div>
    }
  },
  {
    accessorKey: "difficulty",
    header: ({column})=>{
        return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Difficulty
        </Button>
      )
    },
    cell: ({ row }) => {
      const difficulty = row.getValue("difficulty");
      const colors: Record<string, string>={Easy:"bg-green-500",Medium:"bg-amber-500",Hard:'bg-red-500'}
      return <div className={`text-white ${colors[difficulty]} rounded-lg font-medium flex items-center justify-center w-16 ml-4`}>{difficulty}</div>
    },
  },
  {
    accessorKey: "frequency",
    header: "Frequency",
    cell: ({ row }) => {
      const frequency = row.getValue("frequency");
      return <div className="items-center flex justify-center w-14 text-gray-500">{frequency==='locked'?<FaLock />:<div></div>}</div>
    },
  },
]
