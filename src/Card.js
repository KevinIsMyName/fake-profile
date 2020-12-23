import React, { Component } from "react";
import "./Card.css";
import KanyeApi from './Api/KanyeApi'
import Person from './Api/Person'

export default class Card extends Component {
  constructor(props) {
    super (props)

    this.state = {
      quote: '',
      person: ''
    }
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
      console.log(response.data.results[0].name.first)
      this.setState({
        person: response.data.results[0]
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
        {/* {this.state.person} */}
      </div>
    )

  }
} 