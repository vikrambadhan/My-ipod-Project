import React from 'react';
import { FaPhotoVideo } from 'react-icons/fa';

class Coverflow extends React.Component
{
    // Coverflow screen
    render()
    {
        return (
            <div className="screen-coverflow">
                <h1>
                    Cover Flow
                </h1>
                <div>
                    <FaPhotoVideo />
                </div>
            </div>
        );
    }
};

export default Coverflow;