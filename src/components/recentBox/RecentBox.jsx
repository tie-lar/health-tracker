import './recentBox.css';
import plus from '../../assets/plus_icon.png';


import { useState } from 'react';

const RecordBox = ({ elements }) => {
  //const [isOpen, setIsOpen] = useState(false);

  const [notification, setNotification] = useState(null);

  const showNotification = (message, duration) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, duration);
  };

  const Notification = ({ message }) => {
    return (
      <div className="notification">
        <p>{message} Added</p>
      </div>
    );
  };

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
    <>
    {notification && <Notification message={notification} />}
    <div className="record_scroll_section">
      <ul>
        {elements.map(element => (
          <li className="scroll_element" key={element.id}>
            <div className="scroll_element_left">
              <div>{element.name}</div>
              <div className="calories_text">{element.number} Calories</div>
            </div>
            <div className="scroll_element_right">
              <img onClick={() => {showNotification(element.name, 3000)}} className="plus_icon" src={plus} alt="" />
            </div>

          </li>
        ))}
      </ul>
    </div>
    </>

  );
};

export default RecordBox;
