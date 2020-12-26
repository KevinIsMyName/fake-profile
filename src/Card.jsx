import React, { Component } from 'react';
import './Card.css';
import KanyeApi from './Api/KanyeApi';
import Person from './Api/Person';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      person: {},
    };
  }

  async componentDidMount() {
    KanyeApi.getQuote()
      .then(async (res) => {
        this.setState({
          quote: await res.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });

    Person.getData()
      .then(async (res) => {
        this.setState(
          {
            person: await res.data.results[0],
          },
          (_) => {console.log(this.state.person)},
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    // On initial render, there will be no state.person.name b/c GET req not sent yet
    if (!this.state.person || !this.state.quote) {
      return null;
    } else {
      return (
        <div className="card">
          <div>
            {this.state.person.name.first} {this.state.person.name.last}
          </div>
          <div>
<<<<<<< HEAD
            {this.state.quote} —{this.state.person.name.last}, {this.state.person.name.first}
=======
            {this.state.quote} —{this.state.person.last}, {this.state.person.first}
>>>>>>> 68f9ea5130f8120d2168de47f39d70f424746234
          </div>
        </div>
      );
    }
  }
}
