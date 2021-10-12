import React from 'react';
import { GiMicrophone } from 'react-icons/gi';

class Artists extends React.Component
{
    // Artists screen
    render()
    {
        return (
            <div className="artists-screen">
                <h1>
                    Artists
                </h1>
                <div>
                    <GiMicrophone />
                </div>
            </div>
        )

    }
}

export default Artists;