import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './dashboard.css';
import feature from '../../assets/test_image_5.jpg';

const Dashboard = () => {
    return(
        <div className='dashboard_container'>
            <div className='dashboard_header'>
                <h1 id='dashboard'>Dashboard</h1>
              
            </div>
            
            <div className='wotd_header'>
                    <h2 id='h2_1'>Workout of the Day</h2>
                    <h2 id='h2_2'>Squats</h2>
                </div>

            <div className='dashboard_trivia'>
                    <h2>Did you know?</h2>
                    <div className='dashboard_trivia-content'>
                        <p id='trivia-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, illum. Culpa ipsum omnis ut aut! Reprehenderit consectetur iusto nihil incidunt, culpa voluptatibus iure, sed est at blanditiis obcaecati voluptatem quibusdam.</p>
                    </div>
                </div>
                <div className='dashboard_profile'>
                <h3>Username</h3>
                    <button>Edit Details</button>
                    <button>History</button>
                </div>
        </div>
    )
}

export default Dashboard;