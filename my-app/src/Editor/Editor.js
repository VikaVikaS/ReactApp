import React, { Component } from 'react';

import Colors from '../Colors/Colors';
import TextStyles from '../TextStyles/TextStyles';


class Editor extends Component {
    constructor(props) {
        super(props);
        this.handleDragSize = this.handleDragSize.bind(this);
    }
    state = {
        background: '#fff',
        color: '#000',
        border:'#000',
        text: '',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight:400,
        textAlign: 'left'
    }

    handleChangeCompleteBackground = (color) => {
        this.setState({ background: color.hex, border:color.hex });
    }

    handleChangeCompleteColor = (color) => {
        this.setState({ color: color.hex });
    }

    handleFontStyleIt = () => {
        this.setState({ fontStyle:'italic' })
    }

    handleFontStyleBold = () => {
        this.setState({ fontWeight:700 })
    }

    handleFontStyleRegular = () => {
        this.setState({ fontWeight:400 })
    }

    handleFontStyleNormal = () => {
        this.setState({ fontStyle:'normal' })
    }

    handleTextAlignLeft = () => {
        this.setState({ textAlign: 'left' })
    }

    handleTextAlignCenter = () => {
        this.setState({ textAlign: 'center' })
    }

    handleTextAlignRight = () => {
        this.setState({ textAlign: 'right' })
    }

    handleChange = (event) => {
        this.setState({ text: event.target.value });
    } 

    handleDragSize = (fontSize) => {

        this.setState({ fontSize: fontSize + 'em' })

    }

    handleSubmit = () => {

        function formatDate(date) {
          var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
          ];

          var day = date.getDate(),
              monthIndex = date.getMonth(),
              year = date.getFullYear(),
              time  = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

          return day + ' ' + monthNames[monthIndex] + ' ' + year;
        }

        var dateNew = new Date(),
            DateToday = formatDate(dateNew),
            TimeNow = dateNew.getHours() + ":" + dateNew.getMinutes() + ":" + dateNew.getSeconds();

        var newNote = {
            text: this.state.text,
            color: this.state.color,
            background: this.state.background,
            border:this.state.background,
            id: Date.now(),
            date: DateToday,
            time: TimeNow,
            fontSize: this.state.fontSize,
            fontStyle: this.state.fontStyle,
            fontWeight: this.state.fontWeight,
            textAlign: this.state.textAlign
        };
       
        this.props.onSubmit(newNote);

        this.setState({
            background: '#fff',
            color: '#000',
            border:'#000',
            text: ' ',
            date:' ',
            time:' ',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 400,
            textAlign:'left'
        });
    }

    render() {
        return (
            <form className="editor">
                <Colors 
                    background={this.handleChangeCompleteBackground}
                    onChangeCompleteBackground={this.handleChangeCompleteBackground} 
                    onChangeCompleteColor={this.handleChangeCompleteColor}
                />
                <TextStyles md={this.handleFontSizeMd} 
                            sm={this.handleFontSizeSm} 
                            lg={this.handleFontSizeLg} 
                            italic={this.handleFontStyleIt} 
                            bold={this.handleFontStyleBold} 
                            normal={this.handleFontStyleNormal}
                            regular={this.handleFontStyleRegular}
                            leftA={this.handleTextAlignLeft}
                            rightA={this.handleTextAlignRight}
                            centerA={this.handleTextAlignCenter}
                            onMove={this.handleDragSize}
                />
                <div className="textWrapper">
                    <textarea 
                    
                        style={{background:this.state.background, 
                                borderColor:this.state.border,
                                color:this.state.color, 
                                fontStyle:this.state.fontStyle, 
                                fontSize:this.state.fontSize,
                                fontWeight: this.state.fontWeight,
                                textAlign: this.state.textAlign}} 
                        onChange={this.handleChange}
                        value={this.state.text}
                    
                    ></textarea>
                </div>
                <div className="editor-btn"><div onClick={this.handleSubmit}>Send</div></div>
            </form>
        );
    }
}

export default Editor;