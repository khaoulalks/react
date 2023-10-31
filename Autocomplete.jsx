import React, { useState } from 'react';

const Autocomplete = ({ values }) => {
  const [inputValue, setInputValue] = useState('');
  
  const filteredValues = values.filter(value => value.toLowerCase().includes(inputValue.toLowerCase()));

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Saisir une valeur"
      />
      <ul>
        {filteredValues.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
 
 
 