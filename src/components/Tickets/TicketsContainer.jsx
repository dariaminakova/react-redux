import React, {Component} from 'react';
import Ticket from './Ticket';

class TicketsContainer extends Component {

render(){
        const {tickets} = this.props;

        let ticketsList = tickets.map((elem) => {return <Ticket 
            price={elem.price} 
            stops={elem.stops}
            departure_time={elem.departure_time} 
            departure_date={elem.departure_date} 
            origin_name={elem.origin_name} 
            origin={elem.origin} 
            arrival_time={elem.arrival_time} 
            arrival_date={elem.arrival_date} 
            destination_name={elem.destination_name} 
            destination={elem.destination} />}
        );
return (
    <div>
        {ticketsList}
    </div> 
    )
}}

export default TicketsContainer;