// Products.js
import React from "react";

const PreviousProducts = ({str}) => {
  return (
    <div>
      <h2
        style={{
          fontFamily: "bahnschrift",
          color: "#100F3D",
          marginTop: "20px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {str}
      </h2>
    </div>
  );
};

export default PreviousProducts;
