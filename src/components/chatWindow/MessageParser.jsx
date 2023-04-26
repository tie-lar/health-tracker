import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
		message = message.toLowerCase();
        if ((message.includes('login') ||
                message.includes('log') && message.includes('in')) &&
                message.includes('details')) {
			actions.handleLoginDetails();
		}
        else if (message.includes('login') ||
                 message.includes('log') && message.includes('in') ||
                 message.includes('signin') ||
                 message.includes('sign') && message.includes('in')) {
            actions.handleLogin();
        }
        else if (message.includes('sign') && message.includes('up') ||
                 message.includes('signup') ||
				 message.includes('create') && message.includes('account')) {
            actions.handleSignup();
        }
        else if ((message.includes('track') || message.includes('log')) &&
                 (message.includes('calories') || message.includes('calorie'))) {
            actions.handleCalorieTracking();
        }
        else if (message.includes('real') &&
                 message.includes('person')) {
            actions.handleRealPerson();
        }
		else if (message.includes('lost') ||
				(message.includes('cannot') || message.includes("can't")) &&
				 message.includes('access') &&
				(message.includes('account') || message.includes('profile'))) {
			actions.handleLostAccount();
		}
		else if (message.includes('exercise')) {
			actions.handleExercise();
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
