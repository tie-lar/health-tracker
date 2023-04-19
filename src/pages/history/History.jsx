import './history.css';
import feature from '../../assets/feature.png';
import circle from '../../assets/circle.png';
import { Header, Footer, Tracker, Features  } from '../../containers';
import { ScrollBox } from '../../components';
import { Outlet, Link } from "react-router-dom";


const History = () => {
    const elements = [
       { id: 1, name: 'Food 1', number: 123 },
       { id: 2, name: 'Food 2', number: 456 },
       { id: 3, name: 'Food 3', number: 789 },
       { id: 4, name: 'Food 4', number: 456 },
       { id: 5, name: 'Food 5', number: 456 },
       { id: 6, name: 'Food 6', number: 456 },
       { id: 7, name: 'Food 7', number: 456 },
   ];
   const elements2 = [
      { }
  ];
  return (
    <>
      <div className='gradient__bg section__padding history_header default_font'>
          <h2 className="margin_bottom_20">User 123</h2>
          <div className='account_image'>
            <img src={circle} alt="" />
          </div>
      </div>
      <div className='section__padding default_font two_scroll_boxes'>
         <ScrollBox elements={elements} />
         <ScrollBox elements={elements2} />
      </div>
      <div className="back_button_section">
            <Link to="/account" className='default_button'>Back</Link>
      </div>
      <Tracker />
    </>
  )
};

export default History;
