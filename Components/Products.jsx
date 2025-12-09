import React, { useEffect, useState } from "react";
import Product from "./Product";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="d-flex flex-wrap gap-3">
      {products.map((p) => (
        <Product key={p.id} prod={p} />
      ))}
    </div>
  );
}

export default Products;
