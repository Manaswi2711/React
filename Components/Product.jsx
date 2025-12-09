import React from "react";

function Product({ prod }) {
  return (
    <div>
      <div className="card border border-2 border-dark bg-info" style={{ width: "300px" }}>
        <img 
          src={prod.thumbnail}
          style={{ width: "200px", margin: "auto",backgroundColor:"lightpink" }}
          className="card-img-top  w-100 p-2 border border-2  rounded"
          alt={prod.title}
        />

        <div className="card-body text-center">
          <h5 className="card-title">{prod.title}</h5>
          <p className="card-text">{prod.category}</p>
          <p className="card-text">Rs. {prod.price}</p>
          <p className="card-text">{prod.discountPercentage}</p>
          <p className="card-text">{prod.tags?.join(", ")}</p>

          <button className="btn btn-success border border-1 border-info">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
