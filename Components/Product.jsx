import React from 'react'

function Product(props) {
  return (
    <div>
      <div className="card boredr border-2 border-dark " style={{width:"300px"}}>
               <img src={props.thumbnail} style={{width:"200px", margin:"Auto" }} className="card-img-top " alt="..."/>
                   <div className="card-body">
                         <h5 className="card-title">{props.title}</h5>
                         <p className="card-text">{props.category}</p>
                         <p className="card-text">Rs.{props.price}</p>
                         <p className="card-text">{props.DiscountPercentage}</p>
                        <p className="card-text">{props.tags}</p>
                        <button className='btn btn-success boredr border-1 border-info'>Add To Cart</button>
                        
                    </div>
            </div>
    </div>
  )
}

export default Product
