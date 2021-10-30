import Navigation from "./Navigation";
import React, { useState } from "react";
import Products from "./Products";

const curr_products_content = {
  fontSize: "20px"
};
const all_products = {
  marginBottom: "5px"
};
const curr_products = {
  marginBottom: "20px"
};

function Catalog() {
  const [products, setProducts] = useState("All Products");

  return (
    <div className="background-image">
      <Navigation styles={"black"} />
      <div className="flex">
        <div className="filter-container">
          <div className="current-products" style={curr_products}>
            <h2 style={curr_products_content}>Shop /</h2>
            <h1 style={curr_products_content}>{products}</h1>
          </div>
          <div>
            <h2
              style={all_products}
              onClick={() => setProducts("All Products")}
              className="filter"
            >
              All Products
            </h2>
            <h2
              style={all_products}
              onClick={() => setProducts("Processors")}
              className="filter"
            >
              Processors
            </h2>
            <h2
              style={all_products}
              onClick={() => setProducts("Memory")}
              className="filter"
            >
              Memory
            </h2>
            <h2
              style={all_products}
              onClick={() => setProducts("Motherboard")}
              className="filter"
            >
              Motherboards
            </h2>
            <h2
              style={all_products}
              onClick={() => setProducts("Video Cards")}
              className="filter"
            >
              Video Cards
            </h2>
            <h2
              style={all_products}
              onClick={() => setProducts("Chassis")}
              className="filter"
            >
              Chassis
            </h2>
          </div>
        </div>
        <Products products={products} />
      </div>
    </div>
  );
}

export default Catalog;
