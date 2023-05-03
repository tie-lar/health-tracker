import './account.css';
import feature from '../../assets/feature.png';
import circle from '../../assets/circle.png';
import { Header, Footer, Tracker, Features  } from '../../containers';
import { Chart } from '../../components';
import { Outlet, Link } from "react-router-dom";


const Account = () => {
  return (
    <>
      <h1 className='main_heading'>Account</h1>
      <div className=' section__padding account_header default_font'>
          <div className='account_header_left'>
            <h2 className="margin_bottom_20">User 123</h2>
            <div className='account_image'>
              <img src={circle} alt="" />
            </div>
          </div>
          <div className='account_header_right'>
            <Link to="/account/edit" className='default_button'>Edit Account</Link>
            <Link to="/history" className='default_button'>History</Link>
          </div>
      </div>
      <div className='section__padding_less account_header default_font'>
          <div className='account_header_left'>
              <Chart />
          </div>
          <div className='account_header_right'>
            <h2>Since You Started Your Journey</h2>
            <ul className='account_stats_group'>
                <li className='stat_group'>
                    <h4>Calories Burnt</h4>
                    <p>23,567</p>
                </li>
                <li className='stat_group'>
                    <h4>Weight lost</h4>
                    <p>3.78 kg</p>
                </li>
                <li className='stat_group'>
                    <h4>Exercises Completed</h4>
                    <p>56</p>
                </li>
                <li className='stat_group'>
                    <h4>Healthy Meals cooked</h4>
                    <p>25</p>
                </li>
                <li className='stat_group'>
                    <h4>Distance Covered</h4>
                    <p>179 Miles</p>
                </li>
                <li className='stat_group'>
                    <h4>Steps Taken</h4>
                    <p>150,673</p>
                </li>
                <li className='stat_group'>
                    <h4>People inspired</h4>
                    <p>14</p>
                </li>
            </ul>
          </div>
      </div>
      <Tracker />
    </>
  )
};

export default Account;
