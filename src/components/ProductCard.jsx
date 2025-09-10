import React from "react";

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p className="price">${product.price.toFixed(2)}</p>
            <button>Add to favorites</button>
        </div>
    );
}

export default ProductCard;
