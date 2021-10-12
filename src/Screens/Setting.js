import React from 'react';
import { FaCogs } from 'react-icons/fa';

class Setting extends React.Component
{
    // Settings screen
    render()
    {
        return (
            <div className="screen-setting">
                <h1>
                    Settings
                </h1>
                <div>
                    <FaCogs />
                </div>
            </div>
        );
    }
};

export default Setting;