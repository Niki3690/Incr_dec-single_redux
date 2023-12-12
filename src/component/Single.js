import React from "react";
import { useParams } from "react-router-dom";
import { Details } from "./Details";

const Single = () => {
  let { id } = useParams();

  let item = Details.find((p) => p.id == id);
  return (
    <div>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "600px",
            gap: 15,
            justifyContent: "center",
            // textAlign: "center",
            marginTop: 45,
          }}
        >
          <div style={{ border: "2px solid green", paddingBottom: 15 }}>
            <h1 style={{ textAlign: "center" }}>{item.id}</h1>
            <hr />

            <img src={item.thumbnail} style={{ height: 200, width: 596 }} />

            <h2 style={{ height: 50 }}>
              <span style={{ color: "red", fontSize: 30 }}>Title:</span>{" "}
              {item.title}
            </h2>
            <h2 style={{ height: 50 }}>
              <span style={{ color: "red", fontSize: 30 }}>Price:</span>{" "}
              {item.price}
            </h2>
            <h2>
              <span style={{ color: "red", fontSize: 30 }}>Rating:</span>{" "}
              {item.rating}
            </h2>
            <h2>
              <span style={{ color: "red", fontSize: 30 }}>Discription:</span>{" "}
              {item.description}
            </h2>
            <h2>
              <span style={{ color: "red", fontSize: 30 }}>Stock:</span>{" "}
              {item.stock}
            </h2>
            <h2>
              <span style={{ color: "red", fontSize: 30 }}>Quantity:</span>{" "}
              {item.quantity}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
