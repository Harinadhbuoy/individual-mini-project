import React, { useState } from 'react';
import "../../styles/addtourpackage.css";

const TourForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    Tour_Name: '',
    Tour_Description: '',
    Tour_Original_price: '',
    Tour_Discount_price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      Tour_Name: '',
      Tour_Description: '',
      Tour_Original_price: '',
      Tour_Discount_price: ''
    });
  };

  return (
    <div className="tour-form-container"> {/* Updated container div */}
      <form onSubmit={handleSubmit} className="tour-form">
        <div className="form-group">
          <label htmlFor="Tour_Name">Tour Name:</label>
          <input
            type="text"
            id="Tour_Name"
            name="Tour_Name"
            value={formData.Tour_Name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Tour_Description">Tour Description:</label>
          <textarea
            id="Tour_Description"
            name="Tour_Description"
            value={formData.Tour_Description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="Tour_Original_price">Original Price:</label>
          <input
            type="text"
            id="Tour_Original_price"
            name="Tour_Original_price"
            value={formData.Tour_Original_price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Tour_Discount_price">Discount Price:</label>
          <input
            type="text"
            id="Tour_Discount_price"
            name="Tour_Discount_price"
            value={formData.Tour_Discount_price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="my-btn"> Submit </button>
      </form>
    </div>
  );
};

export default TourForm;
