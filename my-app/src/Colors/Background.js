import React, { Component } from 'react';
import { CirclePicker } from 'react-color';

class Background extends Component {
    state = {
        background: '#fff'
    }
    render() {
        return (
           <div className="item">
                <div className="title">
                    Select a background color
                </div>
                <CirclePicker color={ this.props.background } onChangeComplete={ this.props.onChangeBackground } />
            </div>
        );
    }
}

export default Background;