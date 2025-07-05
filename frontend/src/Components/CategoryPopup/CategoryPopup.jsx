import React, { useState } from 'react';
import './CategoryPopup.css'
const CategoryPopup = ({ onClose, onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = () => {
    onCategorySelect(selectedCategory);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>What are you looking for?</h2>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="ethnic">Ethnic</option>
          <option value="marriage_function">Marriage Function</option>
          <option value="casual">Casual</option>
          <option value="party">Party</option>
          <option value="vacation">Vacation</option>
          <option value="beach">Beach</option>
          <option value="mountain_vacation">Mountain Vacation</option>
        </select>
        <button onClick={handleCategorySelect}>Select</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CategoryPopup;
