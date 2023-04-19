import './scrollBox.css';

import { useState } from 'react';


//const numbers = [1, 2, 3, 4, 5];

// const scrollListDisplay = scrollList.map((element, index) =>
//   <li className="scroll_element" key={index}>
//     <div className="scroll_element_left">{element.name}</div>
//     <div className="scroll_element_right">{element.data}</div>
//   </li>
// );
//
//
//
// const ScrollBox = () => {
//
//     return (
//         <>
//           <div className="scroll_section">
//             <ul>{scrollListDisplay}</ul>
//           </div>
//         </>
//     );
// }

const ScrollBox = ({ elements }) => {
  return (
    <div className="scroll_section">
      <ul>
        {elements.map(element => (
          <li className="scroll_element" key={index}>
            <div className="scroll_element_left">{element.name}</div>
            <div className="scroll_element_right">{element.data}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollBox;
