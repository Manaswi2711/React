import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="container text-center"
      style={{ paddingTop: "40px", paddingBottom: "40px" }}
    >
    
      <div className="mb-5">
        <h1 className="fw-bold">Welcome to My React Project 🚀</h1>
        <p className="text-muted fs-5 mt-3">
          Explore our products, browse IMDb movies and check detailed cast info.
        </p>
      </div>

    
      <div className="row justify-content-center gap-4">

     
        <div
          className="card shadow"
          style={{ width: "20rem", borderRadius: "12px" }}
        >
          <img
            src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
            className="card-img-top"
            style={{ height: "180px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">Products</h5>
            <p className="card-text text-muted">
              Explore a wide range of products fetched from dummyJSON API.
            </p>
            <Link to="/products" className="btn btn-dark w-100">
              View Products
            </Link>
          </div>
        </div>

        
        <div
          className="card shadow"
          style={{ width: "20rem", borderRadius: "12px" }}
        >
          <img
            src="https://images.pexels.com/photos/799131/pexels-photo-799131.jpeg"
            className="card-img-top"
            style={{ height: "180px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">IMDb</h5>
            <p className="card-text text-muted">
              Browse trending movie titles and check detailed cast information.
            </p>
            <Link to="/imdb" className="btn btn-warning w-100">
              Open IMDb Section
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
