import React, { Component } from 'react';
import './Colors.css';
import { GithubPicker } from 'react-color';

class Background extends Component {

    

    render() {
        return (
           <div className="item">
                <div className="title">
                    Choose a background color
                </div>
                <GithubPicker onChangeComplete={ this.handleChangeCompleteBackground } />
            </div>
        );
    }
}

export default Background;