import './recordFood.css';
import feature from '../../assets/feature.png';
import circle from '../../assets/circle.png';
import { Header, Footer, Tracker, Features } from '../../containers';
import { RecentBox, Search } from '../../components';
import { Outlet, Link } from "react-router-dom";
import plus from '../../assets/plus_icon.png';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecordFood = () => {
  const [meals, setMeals] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [notification, setNotification] = useState(null);

  const storedUser = localStorage.getItem('user');

  useEffect(() => {
    const fetchAllMeals = async () => {
      try {
        const res = await axios.get("http://localhost:8800/getmeals")
        setMeals(res.data);
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchAllMeals()
  }, [])

  const postMealHistory = async (mealId) => {
    var userId = Number(storedUser)
    try {
      const response = await axios.post('http://localhost:8800/postMealHistory', { params: { iduser: userId, idmeal : mealId } });
      console.log(response.data);
      //setReceivedUserName(response.data.userName);
  
    } catch (err) {
      console.log(err)
    }
  };

  //code for the notification functionality
  const showNotification = (message, duration) => {
    console.log(message);
    postMealHistory(message.idmeal);
    setNotification(message.mealName);
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

  if (meals.length === 1) {
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
      <h1 className='main_heading'>Record Food</h1>
      <div className='section__padding_less search_exercise_container'>
        <div className="search_element">
          <input type="text" placeholder="Search here" className="search_bar"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput} />
          <div className="search_scroll_section">
            <ul>
              {searchInput !== "" && meals.filter((item) => {
                return searchInput.toLowerCase() === "" ? item :
                  item.mealName.toLowerCase().includes(searchInput);
              })
                .map((item) => (
                  <li className="scroll_element" key={item.idmeal}>
                    <div className="scroll_element_left">
                      <div>{item.mealName}</div>
                      <div className="calories_text">{item.mealCalories} Calories, {item.mealDesc}</div>
                    </div>
                    <div className="scroll_element_right">
                      <img onClick={() => { showNotification(item, 3000) }} className="plus_icon" src={plus} alt="" />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className='section__padding_less  rec_exercise_container'>
        <h2>Recent History</h2>
        {notification && <Notification message={notification} />}
        <div className="record_scroll_section">
          <ul>
            {meals.map(element => (
              <li className="scroll_element" key={element.idmeal}>
                <div className="scroll_element_left">
                  <div>{element.mealName}</div>
                  <div className="calories_text">{element.mealCalories} Calories, {element.mealDesc}</div>
                </div>
                <div className="scroll_element_right">
                  <img onClick={() => { showNotification(element, 3000) }} className="plus_icon" src={plus} alt="" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="back_button_section">
        <Link to="/account" className='default_button'>Back</Link>
      </div>
      <Tracker />
    </>
  )
};

export default RecordFood;
