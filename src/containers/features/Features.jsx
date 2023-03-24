import React, {useState} from 'react';
import feature from '../../assets/feature.png';
import './features.css';

const Features = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const goToPrev = () => {
        const isFirstSlide = currentIdx === 0;
        const newIdx = isFirstSlide ? slides.length - 1 : currentIdx -1;
        setCurrentIdx(newIdx);
    };

    const goToNext = () => {
        const isLastSlide = currentIdx === slides.length - 1;
        const newIdx = isLastSlide ? 0 : currentIdx + 1;
        setCurrentIdx(newIdx);
    };

    const goToSlide = (slideIdx) => {
        setCurrentIdx(slideIdx);
    }

    const slides = [
        {}
    ]



  return (
    <div className='ontrack__features'>
      <div className='ontrack__features-content'>
        <h1 className='features_text'>
            Heading
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eveniet nisi aspernatur amet reiciendis repudiandae ex ea earum molestiae omnis labore ipsam ad aperiam accusamus, similique debitis fuga totam nihil?</p>
        
        <div className='circle_buttons'>
            <div className='button'></div>
            <div className='button'></div>
            <div className='button'></div>
        </div>
     </div>
      
      <div className='ontrack__features-image'>
        <img src={feature} alt="" />
      </div>

    </div>
  )
}

export default Features