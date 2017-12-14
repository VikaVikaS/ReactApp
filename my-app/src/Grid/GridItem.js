import React, { Component } from 'react';
import './Grid.css';

class GridItem extends Component {
    render() {
        return (
          <li>
            <div className="noteItem" style={{background:this.props.background, color:this.props.color}}>
               {this.props.children}
            </div>
          </li>
        );
    }
}

export default GridItem;