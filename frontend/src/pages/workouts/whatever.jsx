import React, {useState} from 'react';
import {Outlet, Link} from "react-router-dom";
import './workouts.css';

const Workouts = () => {
    const [isShown, pushupIsShown] = useState(false);
    const [isShown1, squatIsShown] = useState(false);
    const [isShown2, crunchIsShown] = useState(false);
    const [isShown3, situpIsShown] = useState(false);
    const [isShown4, plankIsShown] = useState(false);
    const [isShown5, pullupIsShown] = useState(false);


    const showPushup = event => {
        pushupIsShown(current => !current);
    };

    const showSquat = event => {
        squatIsShown(current => !current);
    };

    const showCrunch = event => {
        crunchIsShown(current => !current);
    };

    const showSitup = event => {
        situpIsShown(current => !current);
    };

    const showPlank = event => {
        plankIsShown(current => !current);
    };

    const showPullup = event => {
        pullupIsShown(current => !current);
    };


    return(
        <div className='workouts_container'>
            <div className='workouts_navbar'>
                <p className='profile_button'><Link to="/account">Profile</Link></p>
                <p className='logout_button'><Link to="/home">Logout</Link></p>
            </div>
            <div className='workouts_header'>
                <h1>Exercises</h1>
                <input type="search" placeholder='Search'/>
            </div>
            <div className='exercises'>
                <div className='exercises_image pushups' ></div>
                <div className='exercises_image-2 pushups' style={{display: isShown ? 'none' : 'flex'}} onClick={showPushup} >
                    <p>PUSHUPS</p>
                </div>
                <div className='exercises_content-v2'onClick={showPushup} >
                    <p id="click-content"  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque quis repudiandae iusto rem eos aspernatur dolorum, ipsum, saepe, temporibus architecto non earum possimus autem labore sapiente a. Reiciendis, ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque eveniet nobis, exercitationem dignissimos, sed dolor non facere molestias, sapiente tempora nemo quae repellendus! Vel ducimus soluta asperiores ab molestias.</p>
                </div>
                <div className='exercises_content'>
                    <h3>Push Ups</h3>
                    <p>4 Reps | 40 Calories</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className='exercises'>
            <div className='exercises_image squats'></div>
            <div className='exercises_image-2 squats' style={{display: isShown1 ? 'flex' : 'none'}} onClick={showSquat}>
                    <p>SQUATS</p>
                </div>
                <div className='exercises_content-v2' onClick={showSquat} style={{display: isShown1 ? 'none' : 'flex'}}>
                    <p id="click-content" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque quis repudiandae iusto rem eos aspernatur dolorum, ipsum, saepe, temporibus architecto non earum possimus autem labore sapiente a. Reiciendis, ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque eveniet nobis, exercitationem dignissimos, sed dolor non facere molestias, sapiente tempora nemo quae repellendus! Vel ducimus soluta asperiores ab molestias.</p>
                </div>
                <div className='exercises_content'>
                    <h3>Squats</h3>
                    <p>4 Reps | 40 Calories</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> 
            </div>
            <div className='exercises'>
            <div className='exercises_image crunches'></div>
            <div className='exercises_image-2 crunches ' style={{display: isShown2 ? 'flex' : 'none'}} onClick={showCrunch}>
                    <p>CRUNCHES</p>
                </div>
                <div className='exercises_content-v2' onClick={showCrunch} style={{display: isShown2 ? 'none' : 'flex'}}>
                    <p id="click-content" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque quis repudiandae iusto rem eos aspernatur dolorum, ipsum, saepe, temporibus architecto non earum possimus autem labore sapiente a. Reiciendis, ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque eveniet nobis, exercitationem dignissimos, sed dolor non facere molestias, sapiente tempora nemo quae repellendus! Vel ducimus soluta asperiores ab molestias.</p>
                </div>
                <div className='exercises_content'>
                    <h3>Crunches</h3>
                    <p>4 Reps | 40 Calories</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> 
            </div>
            <div className='exercises'>
            <div className='exercises_image situps'></div>
            <div className='exercises_image-2 situps' style={{display: isShown3 ? 'flex' : 'none'}} onClick={showSitup}>
                    <p>SIT UPS</p>
                </div>
                <div className='exercises_content-v2' onClick={showSitup} style={{display: isShown3 ? 'none' : 'flex'}}>
                    <p id="click-content" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque quis repudiandae iusto rem eos aspernatur dolorum, ipsum, saepe, temporibus architecto non earum possimus autem labore sapiente a. Reiciendis, ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque eveniet nobis, exercitationem dignissimos, sed dolor non facere molestias, sapiente tempora nemo quae repellendus! Vel ducimus soluta asperiores ab molestias.</p>
                </div>
                <div className='exercises_content'>
                    <h3>Sit Ups</h3>
                    <p>4 Reps | 40 Calories</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> 
            </div>
            <div className='exercises'>
            <div className='exercises_image plank'></div>
            <div className='exercises_image-2 plank' style={{display: isShown4 ? 'flex' : 'none'}} onClick={showPlank}>
                    <p>PLANK</p>
                </div>
                <div className='exercises_content-v2' onClick={showPlank} style={{display: isShown4 ? 'none' : 'flex'}}>
                    <p id="click-content" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque quis repudiandae iusto rem eos aspernatur dolorum, ipsum, saepe, temporibus architecto non earum possimus autem labore sapiente a. Reiciendis, ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque eveniet nobis, exercitationem dignissimos, sed dolor non facere molestias, sapiente tempora nemo quae repellendus! Vel ducimus soluta asperiores ab molestias.</p>
                </div>
                <div className='exercises_content'>
                    <h3>Plank</h3>
                    <p>4 Reps | 40 Calories</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> 
            </div>
            <div className='exercises'>
            <div className='exercises_image pullups'></div>
            <div className='exercises_image-2 pullups' style={{display: isShown5 ? 'flex' : 'none'}} onClick={showPullup}>
                    <p>PULL UPS</p>
                </div>
                <div className='exercises_content-v2' onClick={showPullup} style={{display: isShown5 ? 'none' : 'flex'}}>
                    <p id="click-content" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque quis repudiandae iusto rem eos aspernatur dolorum, ipsum, saepe, temporibus architecto non earum possimus autem labore sapiente a. Reiciendis, ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque eveniet nobis, exercitationem dignissimos, sed dolor non facere molestias, sapiente tempora nemo quae repellendus! Vel ducimus soluta asperiores ab molestias.</p>
                </div>
                <div className='exercises_content'>
                    <h3>Sit Ups</h3>
                    <p>4 Reps | 40 Calories</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> 
            </div>
        </div>
    )
}

export default Workouts;