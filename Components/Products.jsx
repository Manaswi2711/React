import React, {useEffect,useState} from 'react'
import Product from './Product';

function Products() {
var [products,setProducts]=useState();
   useEffect(()=>{
     fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        setProducts(data.products)
    })
   },[]);
  return (
    <div className='border boredr-2 border-info  p-2 text-center' style={{margin:"auto"}}>
     <h1>Products</h1>
 <ul className='d-flex flex-wrap gap-4  ' >
     {products?.map((prod)=>{
        return <Product prod={prod}></Product>;
           })}
           </ul>
    </div>
  )
}

export default Products
