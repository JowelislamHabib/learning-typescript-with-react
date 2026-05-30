import React from "react";

const SimpleCard = ({ name, price, isSpecial = false }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price.toFixed(2)}</p>
      {isSpecial && <span>Special Offer!</span>}
    </div>
  );
};

export default SimpleCard;
