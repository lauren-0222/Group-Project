import React from "react";

function ProductCard({ product }) {
    console.log('ProductCard product:', product)
    return (
        <div className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button>Add to favorites</button>
        </div>
    );
}

export default ProductCard;
