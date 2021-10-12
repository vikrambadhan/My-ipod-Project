import React from 'react';
import MenuItems from './MenuItems';

class Menu extends React.Component
{
    // Menu
    render()
    {
        const { selectedOption } = this.props;
        return (
            <div className="screen-menu">
                <div className="app-logo">
                    <h3><i>Menu</i></h3>
                </div>
                <MenuItems
                    optionsInMenu={this.props.optionsInMenu}
                    selectedOption={selectedOption}
                />
            </div>
        )
    }
}

export default Menu;