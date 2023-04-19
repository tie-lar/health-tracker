import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        if (message.toLowerCase().includes('login') ||
            message.toLowerCase().includes('log') &&
            message.toLowerCase().includes('in') ||
            message.toLowerCase().includes('signin') ||
            message.toLowerCase().includes('sign') &&
            message.toLowerCase().includes('in')) {
            actions.handleLogin();
        }
        else if (message.toLowerCase().includes('sign') &&
                 message.toLowerCase().includes('up') ||
                 message.toLowerCase().includes('signup')) {
            actions.handleSignup();
        }
        else if ((message.toLowerCase().includes('track') || message.toLowerCase().includes('log')) &&
                 (message.toLowerCase().includes('calories') || message.toLowerCase().includes('calorie'))) {
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
