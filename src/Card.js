import React, { Component } from "react";
import "./Card.css";
import KanyeApi from './Api/KanyeApi'
import Person from './Api/Person'
import Picture from './Api/Picture'

export default class Card extends Component {
  constructor(props) {
    super (props)

    this.state = {
      quote: "",
      personName: {},
    };
  }

  componentDidMount() {
    KanyeApi.getQuote().then(response => {
      this.setState({
        quote: response.data
      })
    })
    .catch (e => {
      console.log(e)
    })

    Person.getData().then(response => {
      // console.log(response.data.results[0].name.first)
      this.setState({
        personName: response.data.results[0].name
      });
      
    })
    .catch (e => {
      console.log(e)
    })
  }

  render() {
    return (
      <div className="card">
        {this.state.personName.first}: {this.state.quote}
      </div>
    );

  }
} 