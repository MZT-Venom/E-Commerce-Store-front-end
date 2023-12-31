// HomePage.js (or App.js)

import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./nav.jsx";
import Carousel from "./crousel.jsx";
import PreviousProducts from "./products.jsx";
import ProductCard from "./productCard.jsx";
import Footer from "./footer.jsx";
import "./index.css"; // Import the CSS file

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const jsonData = await response.data;
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Carousel />
      <PreviousProducts str="Our Products"/>

      {/* Products */}
      <div className="row row-cols-4 g-4" style={{ margin: "40px" }}>
        {data.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.image}
            title={product.title}
            rating={`⭐${product.rating.rate} (${product.rating.count})`}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>

      <Footer />

      {/* Add other sections and components here as needed */}
    </div>
  );
};

export default HomePage;
