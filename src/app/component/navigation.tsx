import Link from "next/link"
import React from 'react'

const Navigation = () => {
  return (    

    <div className="bg-red-200" >
        <Link href="/" >Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products/iphone">Product Iphone</Link>
    </div>
    
  )
}

export default Navigation
