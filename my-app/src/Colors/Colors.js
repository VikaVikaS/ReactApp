import React, { Component } from 'react';


import Background from './Background';
import TextColor from './TextColor';

class Colors extends Component {
    render() {
        var onChangeCompleteBackground = this.props.onChangeCompleteBackground,
            onChangeCompleteColor = this.props.onChangeCompleteColor;

        return (
            <div className="colorsSelects">
                <Background onChangeBackground={onChangeCompleteBackground.bind(null)}/>
                <TextColor onChangeColor={onChangeCompleteColor.bind(null)}/>
            </div>
        );
    }
}

export default Colors;