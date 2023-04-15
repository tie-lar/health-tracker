import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleLogin = () => {
        const messageArr = [
            createChatBotMessage(
                `To login with your ontrack account, click the 'Login' button
                in the top-left corner of the screen.`
            ),
            createChatBotMessage(
                `If you don't have an ontrack account yet, you can create one
                using the 'Sign up' button instead.`
            ),
            createChatBotMessage(
                `On smaller screens, the 'Login' and 'Sign up' buttons might be
                hidden in the burger menu (three horizontal bars) in the top-
                left of the screen instead.`
            )
        ];
        messageArr.forEach(botMessage);
        solvedQuery();
    };
    
    
    const handleSignup = () => {
        const messageArr = [
            createChatBotMessage(
                `To sign up for an ontrack account, click the 'Sign up' button
                in the top-left corner of the screen. Enter your details and
                click 'Sign up'. You will automatically be logged in.`
            ),
            createChatBotMessage(
                `On smaller screens, the 'Login' and 'Sign up' buttons might be
                hidden in the burger menu (three horizontal bars) in the top-
                left of the screen instead.`
            )
        ];
        messageArr.forEach(botMessage);
        solvedQuery();
    }
    
    
    const handleCalorieTracking = () => {
        const message = createChatBotMessage(
            'YET TO BE IMPLEMENTED - TELL DIRLEY TO WORK HARDER.'
        )
        botMessage(message);
    }
    
    
    const handleOther = () => {
        const message = createChatBotMessage(
            "Sorry, I didn't catch that. Would you mind rephrasing?"
        );
        botMessage(message);
    }
    
    
    const solvedQuery = () => {
        const message = createChatBotMessage('Has this solved your query?');
        botMessage(message);
    }
    
    
    const botMessage = (message) => {
        setState((prev) => ({...prev, messages: [...prev.messages, message]}));
    }
  
    
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleLogin,
                        handleSignup,
                        handleCalorieTracking,
                        handleOther
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;
