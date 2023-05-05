import './editAccount.css';
import feature from '../../assets/feature.png';
import circle from '../../assets/circle.png';
import { Header, Footer, Tracker, Features  } from '../../containers';
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { UploadProfile } from '../../components';

import { storage } from "../../firebase";
import { ref, uploadBytes, listAll, getDownloadURL  } from "firebase/storage";


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
        Username:
        <input type="text" value={username} onChange={usernameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={emailChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={passwordChange} />
      </label>
      <br />
      <label>
        Calorie Target:
        <input type="number" value={calorieTarget} onChange={calorieTargetChange} />
      </label>
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
        <div className='edit_account_form_btns_left'>
          <a href="#" className='caution_button'>Delete Account</a>
        </div>

        <div className="edit_account_form_btns_right ">
          <button type="submit">Share</button>
          <Link to="/account" className='default_button back_button'>Back</Link>
        </div>
      </div>

    </form>
  );
}


const EditAccount = () => {
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    const storedImageUrl = localStorage.getItem('userImage');
    if (storedImageUrl) {
      setUserImage(storedImageUrl);
    } else {
      setUserImage(circle);
    }
  }, []);

  return (
    <>
      <h1 className='main_heading'>Edit Account</h1>
      <div className='section__padding_less account_header default_font'>
          <div className='account_header_left'>
            <h2 className="margin_bottom_20">User 123</h2>
              <div className="account_image">
                <img src={userImage} alt="User Profile Pic" />
              </div>
              <UploadProfile />
          </div>
      </div>
      <div className='section__padding_less default_font'>
          <AccountForm />
      </div>
      <Tracker />
    </>
  )
};

export default EditAccount;
