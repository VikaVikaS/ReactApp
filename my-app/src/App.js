import React, { Component } from 'react';

import Editor from './Editor/Editor';
import Grid from './Grid/Grid';

class App extends Component {

    state = {
        notes: []
    }

    componentDidMount = () => {
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({ notes: localNotes });
        }
    }

    componentDidUpdate = () => {
        this._updateLocalStorage();
    }

    handleSubmit = (newNote) => {
        if(this.state.notes.length > 0) { 
            var newNotes = this.state.notes.slice();

            newNotes.unshift(newNote);
            this.setState({ notes: newNotes });

            
        } else {
            this.state.notes.push(newNote);
            this.setState({ notes: this.state.notes });
        }
    }

    handleDeleteNote = (note) => {
        var noteId = note.id;
        var newNotes = this.state.notes.filter(function(note) {
            return note.id !== noteId;
        });
        this.setState({ notes: newNotes });
    }

    handleReset = () => {
        this.setState({ notes: [] });
    }

    render() {
        return (
          <div className="NotesApp">
            <Editor onSubmit={this.handleSubmit} />
            <Grid notes={this.state.notes} onNoteDelete={this.handleDeleteNote}/>
            <button className="reset-btn" onClick={this.handleReset}>Delete All</button>
          </div>
        );
    }

    _updateLocalStorage = () => {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
}

export default App;
