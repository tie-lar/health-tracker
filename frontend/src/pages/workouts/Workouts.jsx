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
    const [isShown6, plankContentIsShown] = useState(false);



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

    const showPlankContent = event => {
        plankContentIsShown(current => !current);
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
                <div className='exercises_image pushups'  ></div>
                <div className='exercises_image-2 pushups pushup-content' style={{display: isShown ? 'none' : 'flex'}} onClick={showPushup} >
                    <p>PUSHUPS</p>
                </div>
                <div className='exercises_content-v2' onClick={showPushup} style={{display: isShown ? 'flex' : 'none'}}>
                    <p id="click-content" >
                    <p>The push-up helps to build muscle and improve strength throughout the upper body. It targets the muscles in your chest, arms and the shoulders.</p>
                        <ul>
                            <li>STEPS:</li>
                            <li>1. Get down on all fours, placing your hands slightly wider than your shoulders. </li>
                            <li>2. Straighten your arms and legs. </li>
                            <li>3. Lower your body until your chest nearly touches the floor.</li>
                            <li>4. Pause, then push yourself back up. </li>
                            <li>5. Repeat. </li>
                        </ul>
                    </p>
                </div>
                <div className='exercises_content' >
                    <h3>Push Ups</h3>
                    <p>4 Reps | 40 Calories</p>
                    <p >
                    The push-up helps to build muscle and improve strength throughout the upper body. It targets the muscles in your chest, arms and the shoulders.
                        <ul>
                            <li> STEPS:</li>
                            <li>1. Get down on all fours, placing your hands slightly wider than your shoulders. </li>
                            <li>2. Straighten your arms and legs. </li>
                            <li>3. Lower your body until your chest nearly touches the floor.</li>
                            <li>4. Pause, then push yourself back up. </li>
                            <li>5. Repeat. </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className='exercises'>
            <div className='exercises_image squats' ></div>
            <div className='exercises_image-2 squats squats-content' style={{display: isShown1 ? 'none' : 'flex'}} onClick={showSquat}>
                    <p>SQUATS</p>
                </div>
                <div className='exercises_content-v2' onClick={showSquat} style={{display: isShown1 ? 'flex' : 'none'}}>
                    <p id="click-content" >
                    <p>Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.
                        <ul>
                        <li> STEPS:</li>
                            <li>1. Stand straight with feet hip-width apart. </li>
                            <li>2. Tighten your stomach muscles. </li>
                            <li>3. Lower down, as if sitting in an invisible chair.</li>
                            <li>4. Straighten your legs to lift back up. </li>
                            <li>5. Repeat. </li>
                        </ul>
                    </p>
                    </p>
                    
                </div>
                <div className='exercises_content' style={{display: isShown1 ? 'none' : 'flex'}}>
                    <h3>Squats</h3>
                    <p>4 Reps | 40 Calories</p>
                    <p>Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.
                        <ul>
                        <li> STEPS:</li>
                            <li>1. Stand straight with feet hip-width apart. </li>
                            <li>2. Tighten your stomach muscles. </li>
                            <li>3. Lower down, as if sitting in an invisible chair.</li>
                            <li>4. Straighten your legs to lift back up. </li>
                            <li>5. Repeat. </li>
                        </ul>
                    </p>
                  
                </div> 
            </div>
            <div className='exercises'>
            <div className='exercises_image crunches'  ></div>
            <div className='exercises_image-2 crunches crunches-content' style={{display: isShown2 ? 'none' : 'flex'}} onClick={showCrunch}>
                    <p>CRUNCHES</p>
                </div>
                <div className='exercises_content-v2' onClick={showCrunch} style={{display: isShown2 ? 'flex' : 'none'}}>
                    <p id="click-content" >
                    <p>What are the benefits of doing crunches? Abdominal crunches are designed to tone the core muscles of the body. The exercise aids in strengthening the core muscles, improving the posture, and increasing the mobility and flexibility of the muscles.
                        <ul>
                        <li> STEPS:</li>
                            <li>1. Lie down on your back. Plant your feet on the floor, hip-width apart. </li>
                            <li>2. Bend your knees and place your arms across your chest. Contract your abs and inhale. </li>
                            <li>3. Contract your abs and inhale.</li>
                            <li>4. Inhale and return to the starting position. </li>
                        </ul>
                    </p>
                    </p>
                </div>
                <div className='exercises_content' style={{display: isShown2 ? 'none' : 'flex'}}>
                    <h3>Crunches</h3>
                    <p>4 Reps | 40 Calories</p>
                    <p>What are the benefits of doing crunches? Abdominal crunches are designed to tone the core muscles of the body. The exercise aids in strengthening the core muscles, improving the posture, and increasing the mobility and flexibility of the muscles.
                        <ul>
                        <li> STEPS:</li>
                            <li>1. Lie down on your back. Plant your feet on the floor, hip-width apart. </li>
                            <li>2. Bend your knees and place your arms across your chest. Contract your abs and inhale. </li>
                            <li>3. Contract your abs and inhale.</li>
                            <li>4. Inhale and return to the starting position. </li>
                        </ul>
                    </p>
                </div> 
            </div>
            <div className='exercises'>
            <div className='exercises_image situps' ></div>
            <div className='exercises_image-2 situps situps-content' style={{display: isShown3 ? 'none' : 'flex'}} onClick={showSitup}>
                    <p>SIT UPS</p>
                </div>
                <div className='exercises_content-v2' onClick={showSitup} style={{display: isShown3 ? 'flex' : 'none'}}>
                    <p id="click-content" >
                    <p>Situps work the rectus abdominis, transverse abdominis, and obliques in addition to your hip flexors, chest, and neck. With a larger range of motion, situps target more muscles than crunches and static core exercises.
                        <ul>
                        <li> STEPS:</li>
                            <li>1. Lie down on your back, with your feet on the floor, knees bent.</li>
                            <li>2. Place your hands on either side of your head in a comfortable position. </li>
                            <li>3. Bend your hips and waist to raise your body off the ground</li>
                            <li>4. Lower your body back to the ground into the starting position.</li>
                            <li>5. Repeat. </li>
                        </ul>
                    </p>
                    </p>
                </div>
                <div className='exercises_content' style={{display: isShown3 ? 'none' : 'flex'}}>
                    <h3>Sit Ups</h3>
                    <p>4 Reps | 40 Calories</p>
                    <p>Situps work the rectus abdominis, transverse abdominis, and obliques in addition to your hip flexors, chest, and neck. With a larger range of motion, situps target more muscles than crunches and static core exercises.
                        <ul>
                        <li> STEPS:</li>
                            <li>1. Lie down on your back, with your feet on the floor, knees bent.</li>
                            <li>2. Place your hands on either side of your head in a comfortable position. </li>
                            <li>3. Bend your hips and waist to raise your body off the ground</li>
                            <li>4. Lower your body back to the ground into the starting position.</li>
                            <li>5. Repeat. </li>
                        </ul>
                    </p>
                </div> 
            </div>
            <div className='exercises' >
            <div className='exercises_image plank' ></div>
            <div className='exercises_image-2 plank plank-content' style={{display: isShown4 ? 'none' : 'flex'}} onClick={showPlank}>
                <p>PLANK</p>
            </div>
                <div className='exercises_content-v2' onClick={showPlank} style={{display: isShown4 ? 'flex' : 'none'}}>
                    <p id="click-content" >
                    <p>The plank strengthens your spine, your rhomboids and trapezius, and your abdominal muscles, which naturally result in a strong posture as they grow in strength. Developing your posture can improve on a number of ailments, and prevent the onset of other ones.
                        <ul>
                        <li> STEPS:</li>
                            <li>1. Begin in the plank position, face down with your forearms and toes on the floor. </li>
                            <li>2. Engage your abdominal muscles, drawing your navel toward your spine</li>
                            <li>3. Hold this position for 10 seconds.</li>
                            <li>4. Pause, then repeat. </li>
                        </ul>
                    </p>
                    </p>
                </div>
                <div className='exercises_content' style={{display: isShown4 ? 'none' : 'flex'}}>
                    <h3>Plank</h3>
                    <p>4 Reps | 40 Calories</p>
                    <p>The plank strengthens your spine, your rhomboids and trapezius, and your abdominal muscles, which naturally result in a strong posture as they grow in strength. Developing your posture can improve on a number of ailments, and prevent the onset of other ones.
                        <ul>
                        <li> STEPS:</li>
                            <li>1. Begin in the plank position, face down with your forearms and toes on the floor. </li>
                            <li>2. Engage your abdominal muscles, drawing your navel toward your spine</li>
                            <li>3. Hold this position for 10 seconds.</li>
                            <li>4. Pause, then repeat. </li>
                        </ul>
                    </p>
                </div> 
            </div>
            <div className='exercises'>
            <div className='exercises_image pullups' ></div>
            <div className='exercises_image-2 pullups pullup-content' style={{display: isShown5 ? 'none' : 'flex'}} onClick={showPullup}>
                    <p>PULL UPS</p>
                </div>
                <div className='exercises_content-v2' onClick={showPullup} style={{display: isShown5 ? 'flex' : 'none'}}>
                    <p id="click-content" >
                    <p>Pull-ups strengthen and sculpt your shoulders, forearms, and chest. When properly performed, they also engage your abs, including your deep transverse abdominis, making them a great exercise for targeting many of the major muscles in the body.
                        <ul>
                        <li> STEPS:</li>
                            <li>1. Exhale while pulling yourself up so your chin is level with the bar. Pause at the top. </li>
                            <li>2. Lower yourself (inhaling as you go down) until your elbows are straight. </li>
                            <li>3. Repeat the movement without touching the floor.</li>
                            <li>4. Complete the number of repetitions your workout requires. </li>
                        </ul>
                    </p>
                    </p>
                </div>
                <div className='exercises_content' style={{display: isShown5 ? 'none' : 'flex'}}>
                    <h3>Pull ups</h3>
                    <p>4 Reps | 40 Calories</p>
                    <p>Pull-ups strengthen and sculpt your shoulders, forearms, and chest. When properly performed, they also engage your abs, including your deep transverse abdominis, making them a great exercise for targeting many of the major muscles in the body.
                        <ul>
                        <li> STEPS:</li>
                            <li>1. Exhale while pulling yourself up so your chin is level with the bar. Pause at the top. </li>
                            <li>2. Lower yourself (inhaling as you go down) until your elbows are straight. </li>
                            <li>3. Repeat the movement without touching the floor.</li>
                            <li>4. Complete the number of repetitions your workout requires. </li>
                        </ul>
                    </p>
                </div> 
            </div>
        </div>
    )
}

export default Workouts;