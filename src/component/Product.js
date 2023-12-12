import React from "react";
import { Details } from "./Details";
import { useDispatch } from "react-redux";
import { Add } from "../store/Cartslice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = () => {
  let dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  let AddValue = (item) => {
    const name = cart.some((cartItem) => cartItem.id === item.id);

    if (!name) {
      dispatch(Add(item));
    } else {
      alert(`Product with ID ${item.title} is already in the cart.`);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "250px 250px 250px",
          gap: 15,
          justifyContent: "center",
          textAlign: "center",
          marginTop: 45,
        }}
      >
        {Details.map((item) => {
          return (
            <div style={{ border: "2px solid green", paddingBottom: 15 }}>
              <h2>{item.id}</h2>

              <Link to={`item/${item.id}`}>
              <img src={item.thumbnail} style={{ height: 150, width: 246 }} />
              </Link>
              <h2 style={{ height: 50 }}>Title: {item.title}</h2>
              <h2 style={{ height: 50 }}>Price: {item.price}</h2>
              <h2>Rating: {item.rating}</h2>
              <h2>Stock: {item.stock}</h2>
              <h2>Quantity: {item.quantity}</h2>
              <button onClick={() => AddValue(item)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
