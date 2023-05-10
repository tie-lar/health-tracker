import './history.css';
import circle from '../../assets/circle.png';
import { Tracker, Features } from '../../containers';
import { ScrollBox } from '../../components';
import { Outlet, Link } from "react-router-dom";

import { useState, useEffect } from 'react';

import axios from 'axios';


const History = () => {
   const [activeButtonId, setActiveButtonId] = useState(1);
   const [meals, setMeals] = useState([]);
   const [exercises, setExercises] = useState([]);

   const storedUser = localStorage.getItem('user');

   useEffect(() => {
      const fetchAllMeals = async () => {
         try {
            const response = await axios.get('http://localhost:8800/getmealhistory', { params: { id: storedUser } });
            setMeals(response.data);

         } catch (err) {
            console.log(err)
         }
      }
      fetchAllMeals()
   }, [])

   useEffect(() => {
      const fetchAllExercises = async () => {
         try {
            const response = await axios.get('http://localhost:8800/getexercisehistory', { params: { id: storedUser } });
            setExercises(response.data);

         } catch (err) {
            console.log(err)
         }
      }
      fetchAllExercises()
   }, [])

   const handleButtonClick = (id) => {
      setActiveButtonId(id);
   };


   return (
      <>
         <h1 className='main_heading'>History</h1>
         <div className='section__padding_less history_header default_font'>
            <h2 className="margin_bottom_20">User 123</h2>
            <div className='account_image'>
               <img src={circle} alt="" />
            </div>
         </div>

         <div className='section__padding_less default_font two_scroll_boxes'>
            <div className="scrollBox_element">
               <div className="scroll_section">
                  <ul>
                     {meals.map(element => (
                        <li className="scroll_element" key={element.idmeal}>
                           <div className="scroll_element_left">{element.mealName}</div>
                           <div className="scroll_element_right">{element.mealCalories}</div>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
            <div className="scrollBox_element">
               <div className="scroll_section">
                  <ul>
                     {exercises.map(item => (
                        <li className="scroll_element" key={item.idexercise}>
                           <div className="scroll_element_left">{item.exerciseName}</div>
                           <div className="scroll_element_right">{item.exerciseCalories}</div>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

         </div>
         <div className="back_button_section_history section__padding_less">
            <div className='history_menu'>

            </div>

            <Link to="/account" className='default_button'>Back</Link>
         </div>

         <Tracker />
      </>
   )
};

function Button({ id, isActive, onClick, children }) {
   return (
      <button
         style={{ backgroundColor: isActive ? '#72236A' : 'gray' }}
         onClick={onClick}  >
         {children}
      </button>
   );
}

export default History;
