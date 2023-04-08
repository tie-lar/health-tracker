import { ChatWindow } from '../../components';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';


const TestPage = () => {

  const [showChat, setShowChat] = useState(false);

  function toggleChat() {
  setShowChat(!showChat);
  }

  return (
    <>

      <div>
        <button className="chat-button" onClick={toggleChat}>Chat</button>
        {showChat && <ChatWindow />}
      </div>

    </>
  )
};

export default TestPage;
