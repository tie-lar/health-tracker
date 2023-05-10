import './scrollBox.css';

import { useState } from 'react';

const ScrollBox = ({ elements }) => {
  console.log("hey")
  console.log(elements)
  if (elements.length === 0 ) {
      return (
        <div className="scroll_section">
            <li className="scroll_element">
              <div className="scroll_element_left">Nothing to see...</div>
            </li>
            <li className="scroll_element">
              <div className="scroll_element_left">Added Items Will Show Up Here</div>
            </li>
        </div>
      );

  }
  return (

    <div className="scroll_section">
      <ul>
        {elements.map(element => (
          <li className="scroll_element" key={element.idmeal}>
            <div className="scroll_element_left">{element.mealName}</div>
            <div className="scroll_element_right">{element.mealCalories}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollBox;
