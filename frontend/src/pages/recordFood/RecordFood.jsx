import './recordFood.css';
import feature from '../../assets/feature.png';
import circle from '../../assets/circle.png';
import { Header, Footer, Tracker, Features  } from '../../containers';
import { RecentBox, Search } from '../../components';
import { Outlet, Link } from "react-router-dom";


const RecordFood = () => {
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
      { }
  ];
  return (
    <>
      <h1 className='main_heading'>Record Food</h1>
      <div className='section__padding_less search_exercise_container'>
          <Search elements={elements} />
      </div>
      <div className='section__padding_less  rec_exercise_container'>
             <h2>Recent History</h2>
             <RecentBox elements={elements} />
      </div>
      <div className="back_button_section">
            <Link to="/account" className='default_button'>Back</Link>
      </div>
      <Tracker />
    </>
  )
};

export default RecordFood;
