import "./styles.css";
import { useState, useEffect } from "react";
import { products } from "./data.json";

export default function App() {
  const [activeItem, setActiveItem] = useState(0);
  const data = [
    {
      id: 1,
      title: "Car",
      image:
        "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
    },
    {
      id: 2,
      title: "Laptop",
      image:
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
    },
    {
      id: 3,
      title: "EarRing",
      image:
        "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      handleNext();
    }, 4000);
  }, [activeItem]);
  const handlePrev = () => {
    if (activeItem === 0) {
      setActiveItem(products.length - 1);
    } else {
      setActiveItem(activeItem - 1);
    }
  };
  const handleNext = () => {
    if (activeItem === products.length - 1) {
      setActiveItem(0);
    } else {
      setActiveItem(activeItem + 1);
    }
  };
  return (
    <div className="App">
      <h1>Carousel Data Load</h1>
      <img src={products[activeItem].thumbnail} />
      <p>{products[activeItem].title}</p>
      <div>
        <button type="button" style={{ marginRight: 7 }} onClick={handlePrev}>
          Prev
        </button>
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
