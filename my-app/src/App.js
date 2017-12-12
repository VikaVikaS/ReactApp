import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './Editor/Editor';
import Grid from './Grid/Grid';

class App extends Component {
  render() {
    return (
      <div className="NotesApp">
        <Editor />
        <Grid />
      </div>
    );
  }
}

export default App;
