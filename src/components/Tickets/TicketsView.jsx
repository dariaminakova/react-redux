import React, { Component } from 'react';
import TicketItem from './TicketItem';

export default class TicketsView extends Component {

  render() {

    const {tickets} = this.props;
    let ticketsList = tickets.map((elem) => {
    return <TicketItem 
            origin={elem.origin} 
            stops={elem.stops}
            origin_name={elem.origin_name}
            destination={elem.destination}
            destination_name={elem.destination_name}
            departure_date={elem.departure_date}
            departure_time={elem.departure_time}
            arrival_date={elem.arrival_date}
            arrival_time={elem.arrival_time}
            carrier={elem.carrier}
            price={elem.price}
            />;
  });
    return (
      <div className="ticketList">
        {ticketsList}
      </div>
    );
  }

}
