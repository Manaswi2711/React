import React from 'react'
import { useGetAllProductsQuery } from '../../services/productsApi'

function Products() {
   var{isLoading,data}= useGetAllProductsQuery();
  return (
    <div>
      <h1>Products</h1>
      {isLoading && <h3>Loading....</h3>}
      {!isLoading && <ul>{
       data?.products.map((p)=>{
        return <li>{p.title}</li>
       })
       }
        </ul>}
    </div>
  )
}

export default Products
