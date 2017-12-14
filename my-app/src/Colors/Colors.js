import React, { Component } from 'react';
import './Colors.css';

import Background from './Background';
import TextColor from './TextColor';

class Colors extends Component {
    render() {
        return (
            <div className="colorsSelects">
                <Background onChangeComplete={ this.handleChangeCompleteText } />
                <TextColor onChangeComplete={ this.handleChangeCompleteBackground } />
            </div>
        );
    }
}

export default Colors;