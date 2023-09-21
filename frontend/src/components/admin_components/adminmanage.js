import React, {useState } from 'react';
import TourForm from './addtourpackage';
import { Link, useNavigate } from 'react-router-dom';

const ManageTourPackages = () => {
  const [accordionOpen, setAccordionOpen] = useState(true);
  const Navigate = useNavigate();
  const [tableData, setTableData] = useState([
    { SNO: 1, Tour_Name: 'Record 1', Tour_Description: 'Description 1', Tour_Original_price:'1000', Tour_Discount_price:'1000'},
    // { SNO: 2, name: 'Record 2', description: 'Description 2' },
    // Add more initial data as needed
  ]);


  const handleOnsubmit = () =>{
      Navigate('/addtourpackage');
  }

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  const handleEdit = (id) => {
    // Implement edit logic here
    console.log(`Edit record with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete logic here
    console.log(`Delete record with ID: ${id}`);
  };

  return (
    <div>

      <div className='my-heading'><h2> Our <span>packages</span> </h2></div>
      <div className="accordion">
        <div className={`accordion-header ${accordionOpen ? 'open' : ''}`} onClick={toggleAccordion}>
          <p> Our Trending Packages</p>
        </div>
        {accordionOpen && (
          <div className="accordion-content">
            <table className="responsive-table">
              <thead>
                <tr>
                  <th>S.NO</th>
                  <th>Tour Name</th>
                  <th>Tour Description</th>
                  <th>Tour Offer Price</th>
                  <th>Tour Original Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((record) => (
                  <tr key={record.SNO}>
                    <td>{record.SNO}</td>
                    <td>{record.Tour_Name}</td>
                    <td>{record.Tour_Description}</td>
                    <td>{record.Tour_Original_price}</td>
                    <td>{record.Tour_Discount_price}</td>
                    <td>
                      <button className= "my-btn" onClick={() => handleEdit(record.id)}>Edit</button>
                      <button className= "my-btn" onClick={() => handleDelete(record.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <button onClick = {handleOnsubmit} className="my-btn">
        Add
      </button>
    </div>
  );
};

export default ManageTourPackages;