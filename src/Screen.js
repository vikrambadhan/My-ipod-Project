import React from 'react';
import Menu from './Screens/Menu';
import Game from './Screens/Games';
import Setting from './Screens/Setting';
import Coverflow from './Screens/Coverflow';
import Songs from './Screens/Songs';
import Artists from './Screens/Artists';
import Albums from './Screens/Albums';

class Screen extends React.Component
{
    render()
    {
        return (
            <div className="screen-container">
                <Menu
                    selectedOption={this.props.selectedOption}
                    optionsInMenu={this.props.optionsInMenu}
                />
                {/* Displaying different screens at different options */}
                {this.props.showPage === 0 && this.props.optionsInMenu.length === 4 ? <Game /> : ''}
                {this.props.showPage === 2 && this.props.optionsInMenu.length === 4 ? <Setting /> : ''}
                {this.props.showPage === 3 && this.props.optionsInMenu.length === 4 ? <Coverflow /> : ''}
                {this.props.showPage === 0 && this.props.optionsInMenu.length === 3 ? <Songs /> : ''}
                {this.props.showPage === 1 && this.props.optionsInMenu.length === 3 ? <Artists /> : ''}
                {this.props.showPage === 2 && this.props.optionsInMenu.length === 3 ? <Albums /> : ''}
            </div>
        );
    }

}

export default Screen;