import React, { Component } from "react";
import "./Card.css";
import KanyeApi from './Api/KanyeApi'

export default class Card extends Component {
  constructor(props) {
    super (props)

    this.state = {
      quote: ''
    }
  }

  componentDidMount() {
    // TODO: move API call into Gallery.js
    KanyeApi.getQuote().then(response => {
      this.setState({
        quote: response.data
      })
    })
    .catch (e => {
      console.log(e)
    })
  }

  render() {
    return (
      <div className="card">
        {this.state.quote}
      </div>
    )

  }
} 