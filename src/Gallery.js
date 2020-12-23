import React, { Component } from "react";
import Card from "./Card"
import "./Gallery.css";

class Gallery extends Component {
  // MAKE API CALLS HERE
  constructor(props) {
    super(props)
  }
  
  render() {    
    return <div>
      <Card data="Jason" pet="Dog"/>
      <Card data="Kevin" pet="Dog"/>
      <Card data="Bob" pet="Dog"/>
      <Card data="Marley" pet="Dog"/>
      </div>;
  }
}

export default Gallery;

