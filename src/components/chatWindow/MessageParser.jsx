import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        if (message.toLowerCase().includes('login')) {
            actions.handleLogin();
        }
        else if (message.toLowerCase().includes('sign') ||
                 message.toLowerCase().includes('signup')) {
            actions.handleSignup();
        }
        else if (message.toLowerCase().includes('track') &&
                 message.toLowerCase().includes('calories')) {
            actions.handleCalorieTracking();
        }
        else if (message.toLowerCase().includes('real') &&
                 message.toLowerCase().includes('person')) {
            actions.handleRealPerson();
        }
        else {
            actions.handleOther();
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions: {},
                });
            })}
        </div>
    );
};

export default MessageParser;
