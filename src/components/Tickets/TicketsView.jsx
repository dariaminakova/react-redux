import React, { Component } from 'react';

export default class TicketsView extends Component {

  render() {

    const {tickets} = this.props;
    console.log("tickets:", tickets)

    return (
      <ul>
        <li>
        </li>
      </ul>
    );
  }

}
