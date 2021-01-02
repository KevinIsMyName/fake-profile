import React, { Component } from "react";
import Card from "./Card"
import "./Gallery.css";

class Gallery extends Component {
  render() {
    const cards = []
    for (let i = 0; i < 10; i++) {
      cards.push(<Card key={i} />)
    }
    return (
      <div>
        {cards}
      </div>
    )
  }
}

export default Gallery;
