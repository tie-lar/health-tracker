import React from 'react';
import feature from '../../assets/test_image_5.jpg';
import './tracker.css';

const Tracker = () => {
  return (
    <div className='ontrack_tracker'>
      <div className='ontrack_tracker-content'>
      <h1 className='ontrack_tracker-text'>Calorie Tracker</h1>
        <div className='ontrack__tracker-feature'>
            <img src={feature} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eveniet nisi aspernatur amet reiciendis repudiandae ex ea earum molestiae omnis labore ipsam ad aperiam accusamus, similique debitis fuga totam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repudiandae placeat, provident saepe maiores laboriosam laudantium numquam earum, porro nihil excepturi magni amet ullam blanditiis minima maxime! Incidunt, minus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro architecto ad, aperiam eius debitis, sed autem veniam reprehenderit eos sit veritatis alias, illum voluptatibus perferendis dicta minus numquam quasi.</p>
        </div>
        
       
     </div>
     
    </div>
  )
}

export default Tracker