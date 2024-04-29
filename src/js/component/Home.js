import React, { useState } from "react";

const MyComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [enteredValues, setEnteredValues] = useState([]);

  const handleKeyUp = (event) => {
    if (event.key === "Enter")
	 {
      setEnteredValues([...enteredValues, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Presiona Enter"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <div>
        {enteredValues.map((value, index) => (

          <p key={index}>{value}</p>

        ))}
		
		
      </div>

    </div>
  );
};

export default MyComponent;
