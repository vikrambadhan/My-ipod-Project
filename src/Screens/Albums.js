import React from 'react';
import { FaIcons } from 'react-icons/fa';

class Albums extends React.Component
{
    // Albums screen
    render()
    {
        return (
            <div className="albums-screen">
                <h1>
                    Albums
                </h1>
                <div>
                    <FaIcons />
                </div>
            </div>
        )

    }
}

export default Albums;