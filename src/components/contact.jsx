import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-4 " style={{marginBottom: "20px"}}>
      <div className="card">
        <div className="card-header">
          <h5 style={{ color: '#F57224', fontWeight: 'bold', fontFamily: 'bahnschrift' }}>Contact Us</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
            </div>
            <button
              type="submit"
              className="btn"
              style={{ color: 'white', fontFamily: 'bahnschrift', backgroundColor: '#F57224', marginTop: '20px' }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
