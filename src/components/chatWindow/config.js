import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'OntrackBot';

const config = {
  botName: botName,
  customStyles: {
    botMessageBox: { backgroundColor: 'purple', },
    chatButton: { backgroundColor: 'purple', },
  },
  
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}.`),
    createChatBotMessage(`My goal is to help keep you happy, healthy and ontrack.`),
    createChatBotMessage(`If there is anything I can help you with, just let me know!`),
  ],
};

export default config;
