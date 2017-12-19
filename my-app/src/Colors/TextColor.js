import React, { Component } from 'react';
import { CirclePicker } from 'react-color';

class TextColor extends Component {

    render() {
        return (
            <div className="item">
                <div className="title">
                    Select a text color
                </div>
                <CirclePicker onChangeComplete={ this.props.onChangeColor} />
            </div>
        );
    }
}

export default TextColor;