import React from "react";

const Card = ({ image }) => {
  return (
    <img
      src={image}
      className="w-48 h-48 object-cover rounded-full mb-4 shadow-none transition-shadow duration-300 ease-in-out hover:shadow-sm hover:shadow-fifth"
    />
  );
};

export default Card;
