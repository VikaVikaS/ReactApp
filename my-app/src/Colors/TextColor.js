import React, { Component } from 'react';
import './Colors.css';
import { GithubPicker } from 'react-color';

class TextColor extends Component {

    render() {
        return (
            <div className="item">
                <div className="title">
                    Choose a text color
                </div>
                <GithubPicker />
            </div>
        );
    }
}

export default TextColor;