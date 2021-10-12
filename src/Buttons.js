import React from 'react';
import { FaBars, FaForward, FaBackward, FaPlay, FaPause } from 'react-icons/fa';


const Buttons = (props) =>
{
    return (
        // Setting up the buttons
        <div className="buttons-container">
            <button className="center-circle" onClick={props.selectButtonClicked}>
                <h2>Select</h2>
            </button>
            <button className="menu-button" onClick={props.menuButtonClicked}>
                <FaBars />
            </button>
            <button className="left-button" onClick={props.leftButtonClicked}>
                <FaBackward />
            </button>
            <button className="right-button">
                <FaForward />
            </button>
            <button className="play-pause">
                <FaPlay />/<FaPause />
            </button>
        </div>
    );
}

export default Buttons;