import React from 'react';
import { BsMusicNoteBeamed } from 'react-icons/bs';

class Songs extends React.Component
{
    // Songs screen
    render()
    {
        return (
            <div className="songs-screen">
                <h1>
                    Songs
                </h1>
                <div>
                    <BsMusicNoteBeamed />
                </div>
            </div>
        )

    }
}

export default Songs;