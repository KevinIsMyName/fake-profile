import React, { Component } from 'react';
import './Card.css';
import KanyeApi from './Api/KanyeApi';
import Person from './Api/Person';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import { Card as BootstrapCard } from 'react-bootstrap';
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: false,
      person: false,
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
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    // On initial render, there will be no state.person.name b/c GET req not sent yet
    if (!this.state.person || !this.state.quote || !this.state.person.picture) {
      return null;
    } else {
      return (
        <div className="card">
          <Image roundedCircle className="headshot" src={this.state.person.picture.large} />
          <div className="fullName">
            <h1><Badge variant="light">{this.state.person.name.first}</Badge> {this.state.person.name.last}</h1>
          </div>
          <div className="description">
            {this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last} currently lives in {this.state.person.location.city}, {this.state.person.location.state}, {this.state.person.location.country}. You can contact {this.state.person.gender === 'male' ? 'him' : 'her'} through email at {this.state.person.email} or {this.state.person.gender === 'male' ? 'his' : 'her'} phone at {this.state.person.phone}. {this.state.person.gender === 'male' ? 'He' : 'She'} enjoys going to {this.state.person.location.timezone.description} for vacation.
          </div>
          <div className="quote">
            {this.state.quote} —{this.state.person.name.first} {this.state.person.name.last}
          </div>
          {/* <BootstrapCard style={{ width: '18rem' }}>
            <BootstrapCard.Img variant="top" roundedCircle src={this.state.person.picture.large}></BootstrapCard.Img>
            <BootstrapCard.Body>
              <BootstrapCard.Title>{this.state.person.name.first} {this.state.person.name.last}</BootstrapCard.Title>
              BootstrapCard.Body
            </BootstrapCard.Body>
          </BootstrapCard> */}
        </div>
      );
    }
  }
}
