import React, { Component } from 'react';
import './Colors.css';
import { CirclePicker } from 'react-color';

class Background extends Component {

    render() {
        return (
           <div className="item">
                <div className="title">
                    Choose a background color
                </div>
                <CirclePicker onChangeComplete={ this.props.onChangeBackground } />
            </div>
        );
    }
}

export default Background;