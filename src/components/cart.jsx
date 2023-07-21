import React from 'react';

const Cart = ({ product }) => {
  return (
    <div className="container h-100" style={{marginBottom: "20px", marginTop: "20px"}}>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card mb-4">
            <div className="card-body p-4">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <img
                    src={product.image}
                    className="img-fluid"
                    alt="Product"
                    style={{ width: '100px', height: '100px' }}
                  />
                </div>
                <div className="col-md-2 d-flex justify-content-center">
                  <div>
                    <p className="small text-muted mb-4 pb-2">Name</p>
                    <p className="lead fw-normal mb-0">{product.title}</p>
                  </div>
                </div>
                <div className="col-md-2 d-flex justify-content-center">
                  <div>
                    <p className="small text-muted mb-4 pb-2">Rating</p>
                    <p className="lead fw-normal mb-0">{`⭐${product.rating.rate} (${product.rating.count})`}</p>
                  </div>
                </div>
                <div className="col-md-2 d-flex justify-content-center">
                  <div>
                    <p className="small text-muted mb-4 pb-2">Price</p>
                    <p className="lead fw-normal mb-0">{product.price}</p>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                  <div>
                    <p className="small text-muted mb-4 pb-2">Description</p>
                    <p className="lead fw-normal mb-0">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-5">
            <div className="card-body p-4">
              <div className="float-end">
                <p className="mb-0 me-5 d-flex align-items-center">
                  <span className="small text-muted me-2">Order total:</span>
                  <span className="lead fw-normal">$ {product.price}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-light btn-lg me-2">
              Continue shopping
            </button>
            <button type="button" className="btn btn-lg" style={{ backgroundColor: '#F57224', color: 'white' }}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
