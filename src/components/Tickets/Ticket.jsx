import React, {Component} from 'react';
import './Ticket.css';

class Ticket extends Component {

render(){
        const {price, departure_time, origin, origin_name, departure_date, stops, arrival_time, arrival_date, destination, destination_name} = this.props;

return (
    <div className='tickets-container'>
        <div className='ticket-buy'>
            <div type="button">  
            Купить {price}
            </div>
        </div>
        <div className='ticket-info'>
        <div>
            <ul>
                <li>{departure_time}</li>
                <li>{origin}{origin_name}</li>
                <li>{departure_date}</li>
            </ul>
        </div>
        <div>{stops}</div>
        <div>
            <ul>
                <li>{arrival_time}</li>
                <li>{destination}{destination_name}</li>
                <li>{arrival_date}</li>
            </ul>
        </div>
        </div>
    </div> 
        );
    }
};

export default Ticket;

