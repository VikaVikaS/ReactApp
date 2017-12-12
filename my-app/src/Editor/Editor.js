import React, { Component } from 'react';
import './Editor.css';

class Editor extends Component {
    handleSubmit(e) {
        e.preventDefault();
    }
    render() {
        return (
          <form className="editor">
                <textarea></textarea>
                <div className="editor-btn"><button type="submit" onClick={this.handleSubmit}>Send</button></div>
          </form>
        );
    }
}

export default Editor;