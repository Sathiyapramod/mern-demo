import React from "react";
import "../App.css";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import Card from "./Card";

export function CardList() {
  const productItems = [
    {
      id: 100,
      name: "Snickers Off-White",
      image: image1,
      year: "2024",
      brand: "NIKE",
      price: "$38.00",
    },
    {
      id: 102,
      name: "Snickers Off-White",
      image: image2,
      year: "2024",
      brand: "NIKE",
      price: "$38.00",
    },
    {
      id: 103,
      name: "Snickers Off-White",
      image: image3,
      year: "2024",
      brand: "NIKE",
      price: "$38.00",
    },
  ];
  return (
    <div className="product-container">
      {productItems.map((cardElement) => {
        return (
          <Card
            key={cardElement.id}
            imgSrc={cardElement.image}
            name={cardElement.name}
            brand={cardElement.brand}
            price={cardElement.price}
          />
        );
      })}
    </div>
  );
}

export default CardList;
