import React, { Component } from 'react';

class TextStyles extends Component {

    constructor(props) {
        super(props);
        this.handleDragSize = this.handleDragSize.bind(this);
    }

    handleDragSize = (e) => {

        function getCoords(elem) { 
            var box = elem.getBoundingClientRect();

            return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset
            };
        }

        var line = this.refs.slider,
            lineWidth = line.offsetWidth,
            inner = this.refs.sliderCircle,
            innerOffset = inner.offsetLeft,
            innerWidth = inner.offsetWidth,
            thumbCoords = getCoords(inner),
            shiftX = e.pageX - thumbCoords.left,
            sliderCoords = getCoords(line);

        document.onmousemove = (e) => {
            var newLeft = e.pageX - shiftX - sliderCoords.left,
                rightEdge = lineWidth - innerWidth;

            if (newLeft < 0) {
                newLeft = 0;
            }

            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }

            var fontSize = ((newLeft + innerWidth)/lineWidth + .5);

            // console.log(fSize)

            this.props.onMove(fontSize);

            inner.style.left = newLeft + 'px';
        }
        
        inner.onmouseup = function(e) {
            document.onmousemove = document.onmouseup = null;
        }

        inner.ondragstart = function() {
            return false;
        }
    }

    render() {

        return (
          <div className="textStyles">
            <div className="item">
                <div className="title">
                    Select font style
                </div>
                <div className="main">
                    <span style={{fontStyle:'italic'}} onClick={this.props.italic} >Italic</span>
                    <span style={{fontStyle:'normal'}} onClick={this.props.normal}>Normal</span>
                    <span style={{fontWeight:'bold'}} onClick={this.props.bold}>Bold</span>
                    <span style={{fontWeight:'regular'}} onClick={this.props.regular}>Regular</span>
                </div>
            </div> 
            <div className="item">
                <div className="title">
                    Select text alignment
                </div>
                <div className="main">
                    <span style={{textAlign:'left'}} onClick={this.props.leftA}>Left</span>
                    <span style={{textAlign:'center'}} onClick={this.props.centerA}>Center</span>
                    <span style={{textAlign:'right'}} onClick={this.props.rightA}>Right</span>
                </div>
            </div>
            <div className="item">
                <div className="title">
                    Select font size
                </div>
                <div className="main">
                    <div className="size-slider" ref="slider">
                        <span ref="sliderCircle" onMouseDown={this.handleDragSize}></span>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default TextStyles;
