import React, { Component } from 'react';

class GridItem extends Component {
    render() {
        return (
          <li>
            <div className="noteItem" style={{background:this.props.background}}>
                <div className="noteDate">
                    <div>{this.props.date}</div>
                    <div>{this.props.time}</div>
                </div>
                <div style={{color:this.props.color, 
                             fontStyle:this.props.fontStyle, 
                             fontSize:this.props.fontSize, 
                             fontWeight:this.props.fontWeight,
                             textAlign:this.props.textAlign}}>
                    {this.props.children}
                </div>
                <span className="noteDelete" onClick={this.props.onDelete}>x</span>
            </div>
          </li>
        );
    }
}

export default GridItem;