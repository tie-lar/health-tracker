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

   const storedUser = localStorage.getItem('user');

   useEffect(() => {
      const fetchAllMeals = async () => {
         try {
            const response = await axios.get('http://localhost:8800/getmealhistory', { params: { id: storedUser } });
            console.log(response.data);
            //setReceivedUserName(response.data.userName);
   
         } catch (err) {
            console.log(err)
         }
      }
      fetchAllMeals()
    }, [])

   const handleButtonClick = (id) => {
      setActiveButtonId(id);
   };


   //Day -> food[], exercise[]
   //    -> id, name, number (for each food or exercise)


   //This is just demo data: ----->

   const food_elements = [
      { id: 1, name: 'Banana', number: 123 },
      { id: 2, name: 'Chicken Breast', number: 456 },
      { id: 3, name: 'Tomato', number: 789 },
      { id: 4, name: 'Diet Coke', number: 5 },
      { id: 5, name: 'Pizza - Pepperoni', number: 456 },
      { id: 6, name: 'Toast - With Butter', number: 456 },
      { id: 7, name: 'Cake', number: 456 },
   ];

   const food_elements2 = [
      { id: 1, name: 'Cereal', number: 123 },
      { id: 2, name: 'Peas', number: 456 },
      { id: 3, name: 'Protein Shake', number: 789 },
      { id: 4, name: 'Diet Coke', number: 5 },
      { id: 5, name: 'Pesto Pasta', number: 456 },
      { id: 6, name: 'Toast - With Butter', number: 456 },
      { id: 7, name: 'Ice Cream', number: 456 },
   ];

   const exercise_elements = [
      { id: 1, name: 'Running', number: 112 },
      { id: 2, name: 'Swimming', number: 200 },
      { id: 3, name: 'Cycling', number: 56 },
      { id: 4, name: 'Yoga', number: 78 },
      { id: 5, name: 'Running Machine', number: 456 },
      { id: 6, name: 'Gym - Medium intesity', number: 456 },
      { id: 7, name: 'Boxing', number: 456 },
   ];

   const exercise_elements2 = [
      { id: 1, name: 'Running', number: 112 },
      { id: 2, name: 'Swimming', number: 200 },
      { id: 3, name: 'Tennis', number: 56 },
      { id: 4, name: 'Yoga', number: 78 },
      { id: 5, name: 'Hiking', number: 456 },
      { id: 6, name: 'Gym - High intesity', number: 456 },
      { id: 7, name: 'Push Ups', number: 456 },
   ];

   const food_elements3 = [];
   const exercise_elements3 = [];

   const food_array = [food_elements, food_elements2, food_elements3];
   const exercise_array = [exercise_elements, exercise_elements2, exercise_elements3];

   const last_7_days = [
      { id: 1, day: 'Monday' },
      { id: 2, day: 'Tuesday' },
      { id: 3, day: 'Wednesday' },
      { id: 4, day: 'Thursday' },
      { id: 5, day: 'Friday' },
      { id: 6, day: 'Saturday' },
      { id: 7, day: 'Sunday' }
   ];

   // <-----


   var food_data = food_array[0];
   var exercise_data = exercise_array[0];



   if (activeButtonId == 1) {
      food_data = food_array[0];
      exercise_data = exercise_array[0];
   }
   if (activeButtonId == 2) {
      food_data = food_array[1];
      exercise_data = exercise_array[1];
   }
   if (activeButtonId == 3) {
      food_data = food_array[2];
      exercise_data = exercise_array[2];
   }
   if (activeButtonId == 4) {
      food_data = food_array[1];
      exercise_data = exercise_array[1];
   }
   if (activeButtonId == 5) {
      food_data = food_array[0];
      exercise_data = exercise_array[0];
   }
   if (activeButtonId == 6) {
      food_data = food_array[1];
      exercise_data = exercise_array[1];
   }
   if (activeButtonId == 7) {
      food_data = food_array[0];
      exercise_data = exercise_array[0];
   }


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
               <ScrollBox elements={food_data} />
            </div>
            <div className="scrollBox_element">
               <ScrollBox elements={exercise_data} />
            </div>

         </div>
         <div className="back_button_section_history section__padding_less">
            <div className='history_menu'>
               {last_7_days.map(element => (
                  <Button
                     id={element.id}
                     isActive={activeButtonId === element.id}
                     onClick={() => handleButtonClick(element.id)}>
                     {element.day}
                  </Button>
               ))}
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
