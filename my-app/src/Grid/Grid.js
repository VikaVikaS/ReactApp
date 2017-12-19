import React, { Component } from 'react';

import GridItem from './GridItem';

class Grid extends Component {

    render() {
      var onNoteDelete = this.props.onNoteDelete;
        return (
          <ul className="grid">
            {
              this.props.notes.map(function(note) {
                return (  
                  <GridItem
                    key={note.id}
                    color={note.color}
                    background={note.background}
                    date={note.date}
                    time={note.time}
                    fontStyle={note.fontStyle}
                    fontSize={note.fontSize}
                    fontWeight={note.fontWeight}
                    textAlign={note.textAlign}
                    onDelete={onNoteDelete.bind(null, note)}>
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