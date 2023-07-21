// ProductCard.js
import React from "react";


const ProductCard = ({ imageSrc, title, rating, price, description }) => {
    
  return (
    
    <div className="col" style={{display: 'flex',flexDirection: 'column', alignItems: 'strtech'}}>
      <div className="card" style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <center><img src={imageSrc} className="card-img-top" alt={title} style={{ height: '200px', width: '200px' }} /></center>
        <div className="card-body" style={{flex:'1'}}>
          <h5 className="card-title" style={{ color: '#100F3D', fontFamily: 'bahnschrift', fontWeight: 'bold', textAlign: 'center' }}>{title}</h5>
          <div style={{ textAlign: 'center', marginTop: '-10px' }}>{rating}</div>
          <h5 style={{ color: '#F57224', textAlign: 'center', fontFamily: 'bahnschrift', fontWeight: 'bold' }}>{price} $</h5>
          <p className="card-text" style={{ fontFamily: 'bahnschrift', textAlign: 'justify', overflow: "hidden", marginBottom: '5px'}}>{description}</p>
          <center><button className="btn btn-outline-light" style={{ fontFamily: 'bahnschrift', color: 'white', backgroundColor: '#F57224', position:'absolute', bottom: '5px', right: '0', left:'0',}}>Buy Now</button></center>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
