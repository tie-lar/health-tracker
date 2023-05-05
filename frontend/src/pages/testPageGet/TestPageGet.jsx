
import React, { useEffect, useState } from 'react';
import './testPageGet.css';
import logo from '../../assets/blk_logo.png';
import google from '../../assets/google_logo.png';
import test from '../../assets/test_image.jpg';
import women from '../../assets/women_2.png';
import image3 from '../../assets/image_3.jpg';
import { Outlet, Link } from "react-router-dom";

import axios from 'axios';

const TestPageGet = () => {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    const fetchAllUsers = async() =>{
      try{
        const res = await axios.get("http://localhost:8800/getusers")
        setUsers(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchAllUsers()
  }, [])

  return (
    <div className='cont'>
      <h1>Users</h1>
      <div className='testUsers'>
        {users.map(user=>(
          <div className='testUser'>
            <p>{user.userName}</p>
            <p>{user.email}</p>
          </div>

        ))}
      </div>
    </div>
  );
};

export default TestPageGet;


