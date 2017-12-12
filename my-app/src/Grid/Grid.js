import React, { Component } from 'react';
import './Grid.css';
import GridItem from './GridItem';

class Grid extends Component {

    constructor(props) {
        super(props);
        this.state = {
          posts:[]
        }

        // console.log(this.state.posts)
      }

    componentDidMount() {

        fetch("./notes.json")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                posts: result
              });

              console.log(result)
            },
            (error) => {
              this.setState({
                error
              });
            }
        )
    }

    render() {
        var colors = [
            "red",
            "blue",
            "green",
            "yellow",
            "purple"
        ];
        var textColors = [
            "white",
            "white",
            "white",
            "black",
            "white"
        ];

        var items = [];
        for(var i = 0 ; i < 5; i++) {
            items.push(<GridItem color={colors[i]} key={i} textColor={textColors[i]} />);
        }
        return (
          <ul className="grid">
            {items}
          </ul>
        );
    }
}

export default Grid;