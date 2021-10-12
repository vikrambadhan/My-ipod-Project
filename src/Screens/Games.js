import React from 'react';
import { FaGamepad } from 'react-icons/fa';

class Game extends React.Component
{
    // Games screen
    render()
    {
        return (
            <div className="screen-game">
                <h1>
                    Games
                </h1>
                <div>
                    <FaGamepad />
                </div>
            </div>
        );
    }
};

export default Game;