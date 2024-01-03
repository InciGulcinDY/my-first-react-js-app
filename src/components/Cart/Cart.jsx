import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <Link className="navbar-brand btn position-relative me-1" to="/cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          class="bi bi-cart mb-1"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
        Cart
        <span className="badge bg-success rounded-pill ms-1">
          {cartItems.map((cartItem) => (
            <span key={cartItem}>{cartItem.quantity}</span>
          ))}
        </span>
      </Link>
    </div>
  );
}

export default Cart;
