import React from "react";
import ProductCard from "./ProductCard";

// mock data
const mockProducts = [
  { id: 1, title: "Product 1", description: "Description 1", price: 29.99 },
  { id: 2, title: "Product 2", description: "Description 2", price: 59.99 },
  { id: 3, title: "Product 3", description: "Description 3", price: 19.99 },
  { id: 4, title: "Product 4", description: "Description 4", price: 45.00 },
  { id: 5, title: "Product 5", description: "Description 5", price: 99.99 },
  { id: 6, title: "Product 6", description: "Description 6", price: 15.50 },
  { id: 7, title: "Product 7", description: "Description 7", price: 120.00 },
  { id: 8, title: "Product 8", description: "Description 8", price: 75.25 },
  { id: 9, title: "Product 9", description: "Description 9", price: 33.33 },
  { id: 10, title: "Product 10", description: "Description 10", price: 10.00 },
  { id: 11, title: "Product 11", description: "Description 11", price: 250.00 },
  { id: 12, title: "Product 12", description: "Description 12", price: 5.99 },
  { id: 13, title: "Product 13", description: "Description 13", price: 45.75 },
  { id: 14, title: "Product 14", description: "Description 14", price: 60.00 },
  { id: 15, title: "Product 15", description: "Description 15", price: 150.49 },
  { id: 16, title: "Product 16", description: "Description 16", price: 85.20 },
  { id: 17, title: "Product 17", description: "Description 17", price: 35.10 },
  { id: 18, title: "Product 18", description: "Description 18", price: 70.00 },
  { id: 19, title: "Product 19", description: "Description 19", price: 200.00 },
  { id: 20, title: "Product 20", description: "Description 20", price: 18.49 },
  { id: 21, title: "Product 21", description: "Description 21", price: 300.00 },
];

function ProductList() {
  return (
    <div className="product-list">
      {mockProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
