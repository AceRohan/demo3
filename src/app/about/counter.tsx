"use client"
import React, { useState } from 'react'

const counter = () => {
    const [count,setCount] = useState(0);

  return (
    <div>
      <button className='border border-blue-300 bg-sky-200 p-2' onClick={()=>setCount((count)=>count+1)} >Clicked {count}</button>
    </div>
  )
}

export default counter
