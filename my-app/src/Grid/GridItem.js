import React, { Component } from 'react';
import './Grid.css';

class GridItem extends Component {
    render() {
        return (
          <li>
            <div className="noteItem" style={{background:this.props.color, color:this.props.textColor}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, sunt. 
            </div>
          </li>
        );
    }
}

export default GridItem;