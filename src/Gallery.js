import React, { Component } from "react";
import Card from "./Card"
import "./Gallery.css";

class Gallery extends Component {
  render() {
    return <div>
      <Card />
      <Card />
      <Card />
      <Card />
      </div>;
  }
}

export default Gallery;
