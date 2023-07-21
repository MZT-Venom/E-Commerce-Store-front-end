// App.js
import React from "react";
import Navbar from "./nav.jsx";
import Carousel from "./crousel.jsx";
import PreviousProducts from "./products.jsx";
import ProductCard from "./productCard.jsx";
import Footer from "./footer.jsx";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <PreviousProducts />

      {/* Products */}
      <div
        className="row row-cols-1 row-cols-md-4 g-4"
        style={{ margin: "40px" }}
      >
        <ProductCard
          imageSrc="/images/pro1.png"
          title="Smart Watch"
          rating="⭐⭐⭐⭐⭐"
          price="4,999"
          description="Our Smart Watch combines style, functionality, and cutting-edge technology to enhance your daily life. With its sleek design and advanced features, it's more than just a timepiece."
        />
        {/* Add other ProductCards here */}
      </div>

      <Footer />

      {/* Add other sections and components here as needed */}
    </div>
  );
};

export default HomePage;
