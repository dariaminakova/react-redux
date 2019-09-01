import React, { Component } from 'react';
import './TicketItem.css'

class TicketItem extends Component {
    
    render(){
        const {origin, stops, origin_name, destination, destination_name, 
        departure_date, departure_time, arrival_date, arrival_time,
        carrier, price} = this.props;

        return (
            <div className="item">
                <div className='buyTicket'>
                    <img src='https://gitlab.smissltd.com/svv1313/aviasalesreact/raw/master/images/dddb6e70e25fdd6553238ce7aecfa37661376fbb.png' alt='carrier'></img>
                    <p>{carrier}</p>
                    <button className='button'> Купить за {price} </button>
                </div>
                <div className='infoTicket'>
                    <div>
                        <p>{departure_time}</p>
                        <p>{origin} {origin_name}</p>
                        <p>{departure_date}</p>
                    </div>
                    <div>{stops}</div>
                    <div>
                        <p>{arrival_time}</p>
                        <p>{destination} {destination_name}</p>
                        <p>{arrival_date}</p> 
                    </div>
                </div>
            </div>
        );
    }
}; 

export default TicketItem;