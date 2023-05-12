import './account.css';
import feature from '../../assets/feature.png';
import circle from '../../assets/circle.png';
import { Header, Footer, Tracker, Features } from '../../containers';
import { Chart } from '../../components';
import { Outlet, Link } from "react-router-dom";

import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Account = () => {
  const [receivedUserName, setReceivedUserName] = useState("User");
  const [userImage, setUserImage] = useState(null);
  const [exercises7, setExercises7] = useState([]);

  const storedUser = localStorage.getItem('user');

  const getUserName = async () => {
    try {
      const response = await axios.get('http://localhost:8800/getuserbyid', { params: { id: storedUser } });
      setReceivedUserName(response.data.userName);

    } catch (err) {
      console.log(err)
    }
  };

  //This is the code to get the user history and sort it based on date, for the last 7 days:

  useEffect(() => {
    const fetch7Exercises = async () => {
      try {
        const response = await axios.get('http://localhost:8800/exercisehistory7days', { params: { id: storedUser } });
        setExercises7(response.data);
        //console.log(response.data)

      } catch (err) {
        console.log(err)
      }
    }
    fetch7Exercises()
  }, [])

  // sort the array by date in ascending order
  exercises7.sort((a, b) => new Date(a.date) - new Date(b.date));

  const groupedData = exercises7.reduce((acc, curr) => {
    const date = new Date(curr.date);
    const month = date.toLocaleString('default', { month: '2-digit' });
    const day = date.toLocaleString('default', { day: '2-digit' });
    //const dateStr = `${month}-${day}`;
    const dateStr = `${day}/${month}`;
    if (!acc[dateStr]) {
      acc[dateStr] = [];
    }
    acc[dateStr].push(curr);
    return acc;
  }, {});

  //console.log(groupedData);

  const dailyTotals = Object.entries(groupedData).map(([date, exercises]) => {
    const totalExercises = exercises.length;
    console.log(`Total exercises on ${date}: ${totalExercises}`);
    return { date, totalExercises };
  });

  //console.log(dailyTotals);#

  



  useEffect(() => {
    if (storedUser !== "null") {
      console.log("user logged in");
      getUserName();
    } else {
      console.log("user logged out")
    }
  }, [storedUser]);


  useEffect(() => {
    const storedImageUrl = localStorage.getItem('userImage');
    if (storedImageUrl) {
      setUserImage(storedImageUrl);
    } else {
      setUserImage(circle);
    }
  }, []);


  return (
    <>
      <h1 className='main_heading'>Account</h1>
      <div className=' section__padding account_header default_font'>
        <div className='account_header_left'>
          <h2 className="margin_bottom_20">{receivedUserName}</h2>
          <div className='account_image'>
            <img src={userImage} alt="" />
          </div>
        </div>
        <div className='account_header_right'>
          <Link to="/account/edit" className='default_button'>Edit Account</Link>
          <Link to="/history" className='default_button'>History</Link>
        </div>
      </div>
      <div className='section__padding_less account_header default_font'>
        <div className='account_header_left'>
          <Chart elements={dailyTotals}/>
        </div>
        <div className='account_header_right'>
          <h2>Since You Started Your Journey</h2>
          <ul className='account_stats_group'>
            <li className='stat_group'>
              <h4>Calories Burnt</h4>
              <p>23,567</p>
            </li>
            <li className='stat_group'>
              <h4>Weight lost</h4>
              <p>3.78 kg</p>
            </li>
            <li className='stat_group'>
              <h4>Exercises Completed</h4>
              <p>56</p>
            </li>
            <li className='stat_group'>
              <h4>Healthy Meals cooked</h4>
              <p>25</p>
            </li>
            <li className='stat_group'>
              <h4>Distance Covered</h4>
              <p>179 Miles</p>
            </li>
            <li className='stat_group'>
              <h4>Steps Taken</h4>
              <p>150,673</p>
            </li>
            <li className='stat_group'>
              <h4>People inspired</h4>
              <p>14</p>
            </li>
          </ul>
        </div>
      </div>
      <Tracker />
    </>
  )
};

export default Account;
