import React from 'react';

import './chatWindow.css';

const RealPersonButton = (props) => {
    const options = [
        {
            text: 'I want to talk to a real person',
            handler: props.actionProvider.handleRealPerson,
            id: 1
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

export default RealPersonButton;
