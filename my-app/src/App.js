import React, { Component } from 'react';
import './App.css';
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
        console.log(this.state.notes)
    }

    handleRenderNotes = () => {

    }

    render() {
        return (
          <div className="NotesApp">
            <Editor onSubmit={this.handleSubmit} />
            <Grid notes={this.state.notes}/>
          </div>
        );
    }

    _updateLocalStorage = () => {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
}

export default App;
