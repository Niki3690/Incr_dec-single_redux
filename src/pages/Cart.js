import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Remove, Increment, Decrement } from "../store/Cartslice";

const Cart = () => {
  let Name = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let RemoveValue = (itemID) => {
    dispatch(Remove(itemID));
  };

  let IncrementValue = (itemID) => {
    dispatch(Increment(itemID));
  };

  let DecrementValue = (itemID) => {
    dispatch(Decrement(itemID));
  };
  return (
    <div>
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
          {Name.map((item) => {
            let updatePrice = item.price * item.quantity;
            return (
              <div style={{ border: "2px solid green", paddingBottom: 15 }}>
                <h2>{item.id}</h2>
                <img src={item.thumbnail} style={{ height: 150, width: 246 }} />
                <h2 style={{ height: 50 }}>Title: {item.title}</h2>
                <h2 style={{ height: 50 }}>Price: {updatePrice}</h2>
                <h2>Rating: {item.rating}</h2>
                <h2>Stock: {item.stock}</h2>
                <h2>Quantity: {item.quantity}</h2>
                <div
                  style={{
                    display: "flex",
                    gap: 15,
                    justifyContent: "center",
                    textAlign: "center",
                    marginBottom: 15,
                    
                  }}
                >
                  <div>
                    <button onClick={() => IncrementValue(item.id)}>+</button>
                  </div>

                  <div>
                    <button onClick={() => DecrementValue(item.id)}>-</button>
                  </div>
                </div>
                <button onClick={() => RemoveValue(item.id)}>
                  Remove to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
