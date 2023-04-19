import { Outlet, Link } from "react-router-dom";
import { Navbar, ChatWindow } from '../../components';
import { Footer } from '../../containers';
import './layout.css';


import { useState } from 'react';

//This is the default layout of the page, importing the navbar and the footer and surrounding
//  the main body, which is imported using Outlet
const Layout = () => {

  const [showChat, setShowChat] = useState(false);

  function toggleChat()
  {
      setShowChat(!showChat);
  }

  return (
    <>
      <div className='gradient__bg'>
          <Navbar />
      </div>
      <div className='chatBot'>
        <button className="chat_button default_button" onClick={toggleChat}
        style={{ marginBottom: showChat ? 500 : 0 }}>Help</button>
        {showChat && <ChatWindow />}
      </div>
      <Outlet />

      <Footer />
    </>
  )
};

export default Layout;
