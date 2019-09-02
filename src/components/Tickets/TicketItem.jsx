import React, { Component } from 'react';
import FormModal from '../FormModal/FormModal'; 
import './TicketItem.css'

class TicketItem extends Component {
    state = {
        open: false
    }

    onOpenModal = () => {
        this.setState({ open: true});
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };

    render(){
        const {origin, stops, origin_name, destination, destination_name, 
        departure_date, departure_time, arrival_date, arrival_time,
        carrier, price} = this.props;

        return (
            <div className="item">
                <div className='buyTicket'>
                    <img src='https://gitlab.smissltd.com/svv1313/aviasalesreact/raw/master/images/dddb6e70e25fdd6553238ce7aecfa37661376fbb.png' alt='carrier'></img>
                    <p>{carrier}</p>
                    <button 
                    className='button' 
                    onClick={() => { this.onOpenModal()}}> Купить за {price} </button>
                </div>
                <div className='infoTicket'>
                    <div>
                        <p className='time'>{departure_time}</p>
                        <p className='point'>{origin} {origin_name}</p>
                        <p>{departure_date}</p>
                    </div>
                    <div>количество пересадок: <br/> {stops} </div>
                    <div>
                        <p className='time'>{arrival_time}</p>
                        <p className='point'>{destination} {destination_name}</p>
                        <p>{arrival_date}</p> 
                    </div>
                    <FormModal 
                    open={this.state.open} 
                    onCloseModal={this.onCloseModal}/>
                </div>
            </div>
        );
    }
}; 

export default TicketItem;