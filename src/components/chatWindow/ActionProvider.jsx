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
    }


	const handleLoginDetails = () => {
		const messageArr = [
			createChatBotMessage(
				`If your login details aren't working, our support team can help.`
			),
            createChatBotMessage(
				`Click the button below and I'll connect you to a member of the
				ontrack team now.`,
				{ widget: 'realPersonButton' }
			)
		];
		messageArr.forEach(botMessage);
	}


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


	const handleExercise = () => {
		const messageArr = [
			createChatBotMessage(
				`To track or log your exercise, COMPLETE LATER`
			)
		]
	}


	const handleLostAccount = () => {
		const messageArr = [
			createChatBotMessage(
				`If you've lost access to your account, you can CHECK THIS LATER`
			)
		];
		messageArr.forEach(botMessage);
        solvedQuery();
	}


    const handleCalorieTracking = () => {
        const message = createChatBotMessage(
            'YET TO BE IMPLEMENTED'
        );
        botMessage(message);
    }


    const handleOther = () => {
        const message = createChatBotMessage(
            `Sorry, I didn't catch that. Would you mind rephrasing?`,
            { widget: 'realPersonButton' }
        );
        botMessage(message);
    }


    const handleRealPerson = () => {
        const message = createChatBotMessage(`Connecting you to a real person...
            (NOT REALLY I HAVEN'T DONE IT YET)`
        );
        botMessage(message);
    }


    const solvedQuery = () => {
        const message = createChatBotMessage(
            'Has this solved your query?',
            { widget: 'helpOptions' }
        );
        botMessage(message);
    }
    const handleNo = () => {
        const message = createChatBotMessage(
            `I'm sorry to hear that. If you would like me to connect you to a
            real person, just say 'Connect me to a real person'.`
        );
        botMessage(message);
    }
    const handleYes = () => {
        const message = createChatBotMessage(
            `Great! Message me again if you need any future support.`
        );
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
                        handleOther,
                        handleRealPerson,
                        handleYes,
                        handleNo,
						handleExercise,
						handleLostAccount,
						handleLoginDetails
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;
