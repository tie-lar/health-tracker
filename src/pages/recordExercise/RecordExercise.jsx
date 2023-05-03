import './recordExercise.css';
import feature from '../../assets/feature.png';
import circle from '../../assets/circle.png';
import { Header, Footer, Tracker, Features  } from '../../containers';
import { RecentBox, Search } from '../../components';
import { Outlet, Link } from "react-router-dom";

import { useState} from 'react';


const RecordExercise = () => {
  const elements = [
     { id: 1, name: 'Running', number: 112 },
     { id: 2, name: 'Swimming', number: 200 },
     { id: 3, name: 'Cycling', number: 56 },
     { id: 4, name: 'Yoga', number: 78 },
     { id: 5, name: 'Running Machine', number: 456 },
     { id: 6, name: 'Gym - Medium intesity', number: 456 },
     { id: 7, name: 'Boxing', number: 456 },
  ];

   const elements2 = [
      { }
  ];


  return (
    <>
      <h1 className='main_heading'>Record Exercises</h1>
      <div className=' section__padding_less default_font search_exercise_container'>

          <Search elements={elements} />
      </div>
      <div className='section__padding_less default_font rec_exercise_container'>
             <h2>Recent History</h2>
             <RecentBox elements={elements} />
      </div>
      <div className=" back_button_section">
            <Link to="/account" className='default_button'>Back</Link>
      </div>
      <Tracker />
    </>
  )
};

export default RecordExercise;
