import './App.css';
import React from 'react';
import $ from 'jquery';
import ZingTouch from 'zingtouch';
import Buttons from './Buttons';
import Screen from './Screen';

class App extends React.Component{
 
  constructor(){
        super();
        this.changed_angle = 0;
        this.selection = 0;
        this.state = {
            options: ['Games', 'Music', 'Settings', 'CoverFlow'],
            change_in_angle: 0,
            selected: 0,
            showPage: -1,
            general_menu: ['Games', 'Music', 'Settings', 'Cover Flow'],
            songs_sub_menu: ['Songs', 'Artists', 'Albums'],
            current_music_selection: 0,
            song_index: -1,
            currently_playing: false,
        }
  }
  componentDidMount(){
        var z = new ZingTouch.Region(document.getElementsByClassName('buttons-container')[0]);
        z.bind(document.getElementsByClassName('buttons-container')[0], 'rotate', (event) =>
        {
            //this rotating facility will only be available when the side bar is shown to the user.
            if (document.getElementsByClassName('screen-menu')[0].classList.contains('screen-menu-hide'))
            {
                let dist = event.detail.distanceFromLast;
                this.changed_angle += dist;
                if (this.changed_angle > 60)
                {
                    this.selection++;
                    this.selection = this.selection % this.state.options.length;
                    this.setState({
                        selected: this.selection
                    });

                    this.changed_angle = 0;
                }
                else if (this.changed_angle < -60)
                {
                    this.selection--;
                    if (this.selection === -1)
                        this.selection = this.state.options.length - 1;

                    this.selection = this.selection % this.state.options.length;
                    this.setState({
                        selected: this.selection,
                        // song_index: -1
                    });
                    this.changed_angle = 0;
                }
            }

        });
  }
  menuButtonClicked = () => {

        let screenMenuClassList = document.getElementsByClassName('screen-menu')[0].classList;
        if (screenMenuClassList.contains('screen-menu-hide'))
        {
            $('.screen-menu').removeClass('screen-menu-hide');//hide menu
        }
        else
        {
            $('.screen-menu').addClass('screen-menu-hide');//show menu
        }
  }
  selectButtonClicked = () => {
        if (this.state.selected === 1 && this.state.options.length === 4)
        {
            this.setState(
                {
                    options: this.state.songs_sub_menu,
                    selected: 0,
                    showPage: -1
                }
            );
            this.selection = 0;
            return;
        }
        this.setState({
            showPage: this.state.selected,
            selected: 0,
        });
        this.selection = 0;
        this.menuButtonClicked();
  }
  leftButtonClicked = () => {

        if (this.state.options.length === 3 && document.getElementsByClassName('screen-menu')[0].classList.contains('screen-menu-hide'))//if the menu is open and it is on the songs page only then if the left button clicked, menu will be changed to general options
            this.setState(
                {
                    options: this.state.general_menu,
                    selected: 0
                }
            );
  }
  render()
    {
        return (
            <div className="App">
                <Screen
                    selectedOption={this.state.selected}
                    showPage={this.state.showPage}
                    optionsInMenu={this.state.options}

                />
                <Buttons
                    menuButtonClicked={this.menuButtonClicked}
                    selectButtonClicked={this.selectButtonClicked}
                    leftButtonClicked={this.leftButtonClicked}
                />
            </div>
        );
    }

}

export default App;
