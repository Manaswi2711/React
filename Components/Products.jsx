import React, {useEffect,useState} from 'react'

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
 <ul className='d-flex flex-wrap gap-4 '>
     {products?.map((prod)=>{
        return <li style={{listStyle:"none"}}>
            <div className="card boredr border-2 border-dark " style={{width:"300px"}}>
               <img src={prod.thumbnail} style={{width:"200px", margin:"Auto" }} className="card-img-top " alt="..."/>
                   <div className="card-body">
                         <h5 className="card-title">{prod.title}</h5>
                         <p className="card-text">{prod.category}</p>
                         <p className="card-text">Rs.{prod.price}</p>
                         <p className="card-text">{prod.DiscountPercentage}</p>
                        <p className="card-text">{prod.tags}</p>
                        <button className='btn btn-success boredr border-1 border-info'>Add To Cart</button>
                        
                    </div>
            </div>
                </li>
           })}
           </ul>
    </div>
  )
}

export default Products
