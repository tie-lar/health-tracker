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
