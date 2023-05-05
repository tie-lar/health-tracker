import './history.css';
import circle from '../../assets/circle.png';
import { Tracker, Features } from '../../containers';
import { ScrollBox } from '../../components';
import { Outlet, Link } from "react-router-dom";

import { useState } from 'react';




const History = () => {
   const [activeButtonId, setActiveButtonId] = useState('button1');

   const handleButtonClick = (id) => {
      setActiveButtonId(id);
   };

   const data_set_1 = [];
   const data_set_2 = [];
   const data_set_3 = [];

   let data;
   if (activeButtonId === 'button1') {
      data = data_set_1;
   }
   if (activeButtonId === 'button2') {
      data = data_set_2;
   }
   if (activeButtonId === 'button3') {
      data = data_set_3;
   }
   if (activeButtonId === 'button4') {
      data = data_set_3;
   }
   if (activeButtonId === 'button5') {
      data = data_set_3;
   }

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

   const last_7_days = [
      { id: 1, day: 'Monday', food_elements, exercise_elements},
      { id: 2, day: 'Tuesday', food_elements2, exercise_elements2},
      { id: 3, day: 'Wednesday', food_elements, exercise_elements2},
      { id: 4, day: 'Thursday', food_elements, exercise_elements},
      { id: 5, day: 'Friday', food_elements2, exercise_elements2},
      { id: 6, day: 'Saturday', food_elements, exercise_elements2},
      { id: 7, day: 'Sunday', food_elements2, exercise_elements}
   ];

   // <-----


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
               <ScrollBox elements={food_elements} />
            </div>
            <div className="scrollBox_element">
               <ScrollBox elements={exercise_elements} />
            </div>

         </div>
         <div className="back_button_section_history section__padding_less">
            {last_7_days.map(element => (
               <div className='chart_menu'>
                  <Button
                     id="button1"
                     isActive={activeButtonId === "button1"}
                     onClick={() => handleButtonClick("button1")}>
                     Calories
                  </Button>
                  <Button
                     id="button2"
                     isActive={activeButtonId === "button2"}
                     onClick={() => handleButtonClick("button2")}>
                     Exercises
                  </Button>
                  <Button
                     id="button3"
                     isActive={activeButtonId === "button3"}
                     onClick={() => handleButtonClick("button3")}>
                     Weight
                  </Button>
                  <Button
                     id="button4"
                     isActive={activeButtonId === "button4"}
                     onClick={() => handleButtonClick("button4")}>
                     Weight
                  </Button>
                  <Button
                     id="button5"
                     isActive={activeButtonId === "button5"}
                     onClick={() => handleButtonClick("button5")}>
                     Weight
                  </Button>
                  
               </div>
            ))}

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
