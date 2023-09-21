import React, { useState } from 'react';
import "../../styles/trending_tours.css";

const TrendingPackages = () => {
  const [visibleRecords, setVisibleRecords] = useState(10); // Setting initial visible records

  const expandRecords = () => {
    setVisibleRecords(10); // Expand to show all records
  };

  return (
    <div className="tour-packages">
      <div className='my-heading'><h2> trending <span>packages</span> </h2></div>
      <div className="accordion-content">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>S.NO</th>  
              <th>Tour Name</th>
              <th>Tour Description</th>
              <th>Tour Original Price</th>
              <th>Tour Discount Price</th>
              <th>Book</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(visibleRecords)].map((_, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>Data 2</td>
                <td>Data 3</td>
                <td>Data 4</td>
                <td>Data 5</td>
                <td><button className='my-btn'> Book Tour </button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {visibleRecords === 10 && (
          <button onClick={expandRecords} className='my-btn'> View More </button>
        )}
      </div>
    </div>
  );
};

export default TrendingPackages;