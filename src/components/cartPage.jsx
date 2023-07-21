import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './nav';
import Cart from './cart';
import Footer from './footer';

const CartPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const jsonData = await response.data;
        // Assuming you have selected a product from the data and set it as the selectedProduct
        setSelectedProduct(jsonData[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar/>
      {selectedProduct && <Cart product={selectedProduct} />}
      <Footer/>
    </div>
  );
};

export default CartPage;
