import React from 'react';

import './chatWindow.css';

const HelpOptions = (props) => {
    const options = [
        {
            text: 'Yes',
            //handler: props.actionProvider.handleYes,
            handler: console.log('click'),
            id: 1
        },
        {
            text: 'No',
            handler: props.actionProvider.handleNo,
            id: 2
        },
        {
            text: 'I want to talk to a real person',
            handler: props.actionProvider.handleRealPerson,
            id: 3
        }
    ];

    const optionsMarkup = options.map((option) => (
        <button
            className='help-button'
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));
  
    return <div className='help-options-container'>{optionsMarkup}</div>;
};

export default HelpOptions;