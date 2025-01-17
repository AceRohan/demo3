"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();
  return (
    <div className='text-red-800'>
      Inside About
      about
      <button onClick={()=>router.push("/")} className='border border-black bg-blue-300 p-2' >Go Home</button>
    </div>
  )
}

export default page
