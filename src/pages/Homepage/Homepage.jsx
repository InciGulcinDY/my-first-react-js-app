import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductService from "../../services/ProductService";

function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getAll().then((result) => setProducts(result.data.products));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
