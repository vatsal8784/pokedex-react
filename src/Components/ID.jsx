import React from 'react';
import '../Styles/ID.css'; // Import the CSS file for your component

const ID = ({ id }) => {
  return (
    <div className="IDbox-container">
      <p>#{id}</p>
    </div>
  );
};

export default ID;
