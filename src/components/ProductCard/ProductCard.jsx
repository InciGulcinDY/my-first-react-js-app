import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/actions/cartActions";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const { id, thumbnail, title, description, price } = product;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const deleteItem = (product) => {
    dispatch(removeFromCart(product));
  }

  return (
    <div className="card col-12 col-md-3 mx-auto">
      <div className="card-body mx-auto">
        <img src={thumbnail} className="card-img-top" alt="Product Image" />
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p>{price}₺</p>
        <button
          className="btn btn-success me-1"
          onClick={()=>handleAddToCart(product)}
        >
          Add to Cart
        </button>
        <Link to={`/products/${product.id}`} className="btn btn-primary me-2">
          Details
        </Link>
        <button className="btn btn-dark"
        onClick={()=>deleteItem(product)}>Delete</button>
      </div>
    </div>
  );
}

export default ProductCard;
