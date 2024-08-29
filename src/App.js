import "./styles.css";
import { useState, useEffect } from "react";
import { products } from "./data.json";

export default function App() {
  const [activeItem, setActiveItem] = useState(0);

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
