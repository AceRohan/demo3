import React from 'react'

const Products = async ({params}:{params:{id:string}}) => {
    const {id} = await params;
  return (
    <div>
      List of Product : {id}
    </div>
  )
}

export default Products
