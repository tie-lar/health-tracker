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
				`Contact them via the "Support" link at the bottom of this page.`,
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


	const handleExercise = () => {   // CHECK THIS PROCESS IS RIGHT
		const messageArr = [
			createChatBotMessage(
				`To track or log your exercise, first ensure you are logged in
				to your ontrack account.`
			),
            createChatBotMessage(
                `Next, click the "Dashboard" button at the top of your page.
                You should be able to see a graph of your exercises from here.
                If you would like to log a workout, select the option from your
                dashboard.`
            ),
		];
        messageArr.forEach(botMessage);
        solvedQuery();
	}


	const handleLostAccount = () => {
		const messageArr = [
			createChatBotMessage(
				`If you've lost access to your account, you can reset your
				password by clicking the "Login" button in the top corner of of
				the home page and then clicking the "Reset" button next to
				"Forgot your password?".`
			),
            createChatBotMessage(
                `Follow the instructions to set a new password.`
            ),
            createChatBotMessage(
                `If you still can't access your account, speak to a member of
                our support team by clicking the "Support" button at the bottom
                of this page.`
            )
		];
		messageArr.forEach(botMessage);
        solvedQuery();
	}


    const handleCalorieTracking = () => {   // CHECK THIS PROCESS IS RIGHT
        const messageArr = [
            createChatBotMessage(
                `To track your calories or log a meal, first ensure you are
                signed in to your ontrack account.`
            ),
            createChatBotMessage(
                `Next, click the "Dashboard" button at the top of your page.
                You should be able to see a graph of your calories from here.
                If you would like to log a meal, select the option from your
                dashboard.`
            ),
        ];
        messageArr.forEach(botMessage);
        solvedQuery();
    }


    const handleOther = () => {
        const message = createChatBotMessage(
            `Sorry, I didn't catch that. Would you mind rephrasing?`,
        );
        botMessage(message);
    }


    const handleRealPerson = () => {
        const message = createChatBotMessage(
            `If you would like to talk to one of our support staff, just click
            the "Support" button at the bottom of the page and follow the
            instructions.`
        );
        botMessage(message);
        solvedQuery();
    }


    const solvedQuery = () => {
        const message = createChatBotMessage(
            'Has this solved your query?',
        );
        botMessage(message);
    }
    const handleNo = () => {
        const message = createChatBotMessage(
            `I'm sorry to hear that. If you would like to speak to a member of
            our support team, contact them via the "Support" link at the bottom
            of the page.`
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
