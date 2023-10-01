import React from 'react'
import { Problem, columns } from "../types/columns"
import { DataTable } from "../components/DataTable"
 
async function getData(): Promise<Problem[]> {
  // Fetch data from your API here.
  return [
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "Recyclable and Low Fat Products",
      solution: false,
      acceptance: `${Math.floor(Math.random() * 100)}%`,
      difficulty:'Easy',
      frequency:'locked'
    },
    {
        id: Math.floor(Math.random() * 1000) + 1,
        title: "Find the Team Size",
        solution: false,
        acceptance: `${Math.floor(Math.random() * 100)}%`,
        difficulty:'Medium',
        frequency:'locked'
    },
    {
        id: Math.floor(Math.random() * 1000) + 1,
        title: "Students With Invalid Departments",
        solution: false,
        acceptance: `${Math.floor(Math.random() * 100)}%`,
        difficulty:'Hard',
        frequency:'locked'
    },
    {
        id: Math.floor(Math.random() * 1000) + 1,
        title: "Warehouse Manager ",
        solution: false,
        acceptance: `${Math.floor(Math.random() * 100)}%`,
        difficulty:'Hard',
        frequency:'locked'
    },
    {
        id: Math.floor(Math.random() * 1000) + 1,
        title: "Find Customers With Positive Revenue this Year",
        solution: false,
        acceptance: `${Math.floor(Math.random() * 100)}%`,
        difficulty:'Easy',
        frequency:'locked'
    }
    // ...
  ]
};

const Problems = async () => {
  const data = await getData();
  return (
    <div className='w-4/5 m-auto h-screen container py-10'>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default Problems