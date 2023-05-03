import './search.css';
import plus from '../../assets/plus_icon.png';


import { useState} from 'react';


const Search = ({ elements }) => {
  const [searchInput, setSearchInput] = useState('');

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
      <div className="search_element">
        <input type="text" placeholder="Search here" className="search_bar"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}/>
        <div className="search_scroll_section">
          <ul>
            {searchInput !== "" && elements.filter((item) => {
              return searchInput.toLowerCase() === "" ?  item :
              item.name.toLowerCase().includes(searchInput);
            })
            .map((item) => (
              <li className="scroll_element" key={item.id}>
                <div className="scroll_element_left">
                  <div>{item.name}</div>
                  <div className="calories_text">{item.number} Calories</div>
                </div>
                <div className="scroll_element_right">
                  <img onClick={() => {showNotification(item.name, 3000)}} className="plus_icon" src={plus} alt="" />
                </div>

              </li>
            ))}
          </ul>
        </div>
      </div>

    </>
  );
};

export default Search;
