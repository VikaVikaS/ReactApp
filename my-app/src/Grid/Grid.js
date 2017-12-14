import React, { Component } from 'react';
import './Grid.css';
import GridItem from './GridItem';

class Grid extends Component {

    render() {
        return (
          <ul className="grid">
            {
              this.props.notes.map(function(note) {
                return (  
                  <GridItem
                    key={note.id}
                    color={note.color}
                    background={note.background}>
                    {note.text}
                  </GridItem>
                );
              })
            }
          </ul>
        );
    }
}

export default Grid;