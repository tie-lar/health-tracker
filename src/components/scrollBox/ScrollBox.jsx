import './scrollBox.css';

import { useState } from 'react';

const ScrollBox = ({ elements }) => {
  if (elements.length === 1 ) {
      return (
        <div className="scroll_section">
            <li className="scroll_element">
              <div className="scroll_element_left">Nothing to see...</div>
            </li>
        </div>
      );

  }
  return (

    <div className="scroll_section">
      <ul>
        {elements.map(element => (
          <li className="scroll_element" key={element.id}>
            <div className="scroll_element_left">{element.name}</div>
            <div className="scroll_element_right">{element.number}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollBox;
