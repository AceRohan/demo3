import React from 'react'

const ProductLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        {children}
      <h1>Featured Product Section</h1>
    </div>
  )
}

export default ProductLayout
