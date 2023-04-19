import './shareGoal.css';
import feature from '../../assets/feature.png';
import circle from '../../assets/circle.png';
import { Header, Footer, Tracker, Features  } from '../../containers';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';


function AccountForm() {
  const [username, setUsername] = useState('ExampleUsername123');
  const [email, setEmail] = useState('example@example.com');
  const [password, setPassword] = useState('passwordChange');
  const [calorieTarget, setCalorieTarget] = useState('3000');
  const [gainActive, setGainActive] = useState(true);

  const usernameChange = (event) => {
      setUsername(event.target.value);
  };

  const emailChange = (event) => {
      setEmail(event.target.value);
  };

  const passwordChange = (event) => {
      setPassword(event.target.value);
  };

  const calorieTargetChange = (event) => {
      setCalorieTarget(event.target.value);
  };

  const weightGainChange = () => {
      setGainActive(true);
      //setIsLossActive(false);
  };

  const weightLossChange = () => {
      setGainActive(false);
      //setIsLossActive(true);
  };

  const submitFunc = (event) => {
    event.preventDefault();
    // do something with the form data
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}, Calorie Target: ${calorieTarget}, Weight Gain: ${gainActive}`);
  };

  return (
    <form onSubmit={submitFunc} className='edit_account_form center_padding'>
      <label>
        Goal Name:
        <input type="text" value={username} onChange={usernameChange} />
      </label>
      <br />
      <label>
        Calorie Target:
        <input type="number" value={calorieTarget} onChange={calorieTargetChange} />
      </label>
      <br />
      <label>
        Time Frame:
        <input type="date" value={password} onChange={passwordChange} />
      </label>
      <br />

            <br />
              <br />
      <div className="weight_toggle">
        <button
          type="button"
          style={{ backgroundColor: gainActive ? '#8884d8' : 'gray' }}
          onClick={weightGainChange}>
          Weight Gain
        </button>
        <button
          type="button"
          style={{ backgroundColor: gainActive ? 'gray'  : '#8884d8' }}
          onClick={weightLossChange}>
          Weight Loss
        </button>
      </div>

      <br />
      <div className="edit_account_form_btns">
          <div className="edit_account_form_btns_left">
              
          </div>
          <div className="edit_account_form_btns_right ">

            <button type="submit">Share</button>
            <Link to="/account" className='default_button back_button'>Back</Link>
          </div>
      </div>

    </form>
  );
}


const ShareGoal = () => {
  return (
    <>
      <div className='gradient__bg section__padding account_header default_font'>
          <div className='account_header_left'>
            <h2 className="margin_bottom_20">User 123</h2>
            <div className='account_image'>
              <img src={circle} alt="" />
            </div>
          </div>
          <div className='account_header_right'>

          </div>
      </div>
      <div className='section__padding default_font'>
          <AccountForm />
      </div>
      <Tracker />
    </>
  )
};

export default ShareGoal;
