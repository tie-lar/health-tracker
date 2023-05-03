import './history.css';
import circle from '../../assets/circle.png';
import {  Tracker, Features } from '../../containers';
import { ScrollBox } from '../../components';
import { Outlet, Link } from "react-router-dom";


const History = () => {
   const elements = [
      { id: 1, name: 'Banana', number: 123 },
      { id: 2, name: 'Chicken Breast', number: 456 },
      { id: 3, name: 'Tomato', number: 789 },
      { id: 4, name: 'Diet Coke', number: 5 },
      { id: 5, name: 'Pizza - Pepperoni', number: 456 },
      { id: 6, name: 'Toast - With Butter', number: 456 },
      { id: 7, name: 'Cake', number: 456 },
   ];
   const elements2 = [
      { id: 1, name: 'Running', number: 112 },
      { id: 2, name: 'Swimming', number: 200 },
      { id: 3, name: 'Cycling', number: 56 },
      { id: 4, name: 'Yoga', number: 78 },
      { id: 5, name: 'Running Machine', number: 456 },
      { id: 6, name: 'Gym - Medium intesity', number: 456 },
      { id: 7, name: 'Boxing', number: 456 },
   ];
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
               <ScrollBox elements={elements} />
            </div>
            <div className="scrollBox_element">
               <ScrollBox elements={elements2} />
            </div>

         </div>
         <div className="back_button_section">
            <Link to="/account" className='default_button'>Back</Link>
         </div>
         <Tracker />
      </>
   )
};

export default History;
