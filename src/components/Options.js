import React from 'react';
import Option from './Option.js';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Suas Opções</h3>
                <button 
                    onClick={props.handleDeleteOptions}
                    className="button button--link"
                >
                    Remover Todas
                </button>
        </div>
        {
            props.options.length === 0 && 
            <div className="widget__message">
                <p>Por favor adicione uma opção para começar!</p>
            </div>
        }
        {
            props.options.map((option, index) => (
                <Option 
                    count={index + 1}
                    key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
);

export default Options;