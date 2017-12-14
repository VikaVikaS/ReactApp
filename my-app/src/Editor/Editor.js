import React, { Component } from 'react';
import './Editor.css';
import Background from '../Colors/Background';
import TextColor from '../Colors/TextColor';
import { GithubPicker } from 'react-color';


class Editor extends Component {

    constructor(props) {

        super(props);
        
        // var posts=[];
    }

    state = {
        background: '#fff',
        color: '#000'
    }

    handleChangeCompleteBackground = (color) => {
        this.setState({ background: color.hex });
    }

    handleChangeCompleteColor = (color) => {
        this.setState({ color: color.hex });
    }

    handleSubmit(e) {
        e.preventDefault();

        // localStorage.setItem('notes', ''+posts+'')
    }

    render() {
        return (
            <form className="editor">
                <div className="colorsSelects">
                    <div className="item">
                        <div className="title">
                            Choose a background color
                        </div>
                        <GithubPicker onChangeComplete={ this.handleChangeCompleteBackground } />
                    </div>
                    <div className="item">
                        <div className="title">
                            Choose a text color
                        </div>
                        <GithubPicker onChangeComplete={ this.handleChangeCompleteColor } />
                    </div>
                </div>
                <textarea style={{background:this.state.background, color:this.state.color}}></textarea>
                <div className="editor-btn"><button type="submit" onClick={this.handleSubmit}>Send</button></div>
            </form>
        );
    }
}

export default Editor;