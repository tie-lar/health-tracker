
import './chatWindow.css';

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

//edit
import config from './config.js';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';


const ChatWindow = () => {
  return (
    <>
    <div className="chatWindow_element">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
    </>
  )
}

export default ChatWindow
