// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { Remove, Increment, Decrement } from "../store/Cartslice";

// const Cart = () => {
//   let Name = useSelector((state) => state.cart);
//   let dispatch = useDispatch();

//   let RemoveValue = (itemID) => {
//     dispatch(Remove(itemID));
//   };

//   let IncrementValue = (itemID) => {
//     dispatch(Increment(itemID));
//   };

//   let DecrementValue = (itemID) => {
//     dispatch(Decrement(itemID));
//   };

//   React.useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(Name));
//   }, [Name]);
//   return (
//     <div>
//       <div>
//         <div
//           style={{
//             marginTop: 45,
//           }}
//         >
//           {Name.map((item) => {
//             let updatePrice = item.price * item.quantity;
//             return (
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   width: "80%",
//                   gap: 15,
//                   textAlign: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <h2>{item.id}</h2>
//                 <img src={item.thumbnail} style={{ height: 80, width: 86 }} />
//                 <h2 style={{ width: 100,height:80 }}>Title: {item.title}</h2>
//                 <h2 style={{ width: 100 }}>Price: {updatePrice}</h2>
//                 <h2 style={{ width: 100 }}>Rating: {item.rating}</h2>
//                 <h2 style={{ width: 100 }}>Stock: {item.stock}</h2>
//                 <h2 style={{ width: 100 }}>Quantity: {item.quantity}</h2>
//                 <div
//                   style={{
//                     display: "flex",
//                     gap: 15,

//                     marginBottom: 15,
//                   }}
//                 >
//                   <div>
//                     <button onClick={() => IncrementValue(item.id)}>+</button>
//                   </div>

//                   <div>
//                     <button onClick={() => DecrementValue(item.id)}>-</button>
//                   </div>
//                 </div>
//                 <button onClick={() => RemoveValue(item.id)}>
//                   Remove to Cart
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Remove, Increment, Decrement } from "../store/Cartslice";

const Cart = () => {
  let cartItems = useSelector((state) => state.cart);
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

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <table style={{ width: "70%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Price</th>

            <th>Quantity</th>

            <th>DiscountPercentage</th>
            <th>Buttons</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item) => {
            let updatePrice = item.price * item.quantity;
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src={item.thumbnail} style={{ height: 80, width: 86 }} />
                </td>
                <td>{item.title}</td>
                <td>{updatePrice}</td>

                <td>{item.quantity}</td>

                <td>{item.discountPercentage}%</td>
                <td>
                  <button onClick={() => IncrementValue(item.id)}>+</button>
                  <button onClick={() => DecrementValue(item.id)}>-</button>
                  <button onClick={() => RemoveValue(item.id)}>Remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
