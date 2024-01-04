import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  let namee = useSelector((state) => state.cart);
  let total = namee.reduce((def, item) => def + item.price * item.quantity, 0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        fontSize: 25,
        gap: 25,
        fontWeight: 700,
        marginTop: 25,
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link to="cart" style={{ textDecoration: "none" }}>
        Cart
      </Link>

      <span style={{ color: "#551A8B" }}>Total cart Item: {namee.length}</span>
      <span style={{ color: "#551A8B" }}>Total cart Price:{total} </span>
    </div>
  );
};

export default Navbar;
