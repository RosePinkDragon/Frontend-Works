import React from "react";
import { productData } from "utils/HomeData";

const ProductCards = () => {
  console.log(productData.length);

  return (
    <div className="cardWrap">
      {productData.map(({ name, products }) => (
        <div className="card" key={name}>
          <h3>{name}</h3>
          <h5>{products.length}</h5>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
