import React from 'react';
import '../Styles/Type.css'; 

const Type = ({ value, key }) => {
  return (
    <div key={key} className="type-box">
      {value}
    </div>
  );
};

export default Type;
