import React, { Component } from 'react';
import './Editor.css';
import Colors from '../Colors/Colors';


class Editor extends Component {

    state={
        background: '#fff',
        color: '#000',
        text: ''
    }

    handleChangeCompleteBackground = (color) => {
        this.setState({ background: color.hex });
    }

    handleChangeCompleteColor = (color) => {
        this.setState({ color: color.hex });
    }

    handleChange = (event) => {
        this.setState({ text: event.target.value });
    } 

    handleSubmit = (event) => {
        event.preventDefault();

        var newNote = {
            text: this.state.text,
            color: this.state.color,
            background: this.state.background,
            id: Date.now()
        };

       
        this.props.onSubmit(newNote);

        this.setState({
            background: '#fff',
            color: '#000',
            text: ' '
        });
    }

    render() {
        return (
            <form className="editor">
                <Colors 
                    onChangeCompleteBackground={this.handleChangeCompleteBackground} 
                    onChangeCompleteColor={this.handleChangeCompleteColor}
                />
                <textarea 

                    style={{background:this.state.background, 
                            color:this.state.color}} 
                    onChange={this.handleChange}
                    value={this.state.text}

                ></textarea>
                <div className="editor-btn"><button onClick={this.handleSubmit}>Send</button></div>
            </form>
        );
    }
}

export default Editor;