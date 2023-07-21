        // Carousel.js
import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/Image1.jpg" className="d-block w-100" alt="Image1" />
        </div>
        <div className="carousel-item">
          <img src="/images/Image2.png" className="d-block w-100" alt="Image2" />
        </div>
        <div className="carousel-item">
          <img src="/images/Image3.png" className="d-block w-100" alt="Image3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
