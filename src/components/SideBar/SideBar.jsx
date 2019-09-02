import React, {Component} from 'react';

import './SideBar.css'

class SideBar extends Component {

render(){

    let filterTicketsByStops = (e) => {
        e = e.target.value;
    }

return(
    <div className='sideBar-container'>
        <h5>ВАЛЮТА</h5>
        <div className='change-cash'>
            <button>RUB</button>
            <button>USD</button>
            <button>EUR</button>
        </div>
        <div className='filter-stops' onChange = {filterTicketsByStops} >
        <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
            <input type="radio" name="option1" value="0"/>без пересадок<br/>
            <input type="radio" name="option2" value="1" />1 персадка<br/>
            <input type="radio" name="option3" value="2" />2 персадки<br/>
            <input type="radio" name="option4" value="3" />3 персадки<br/>
        </div>
    </div> 
    )
}}

export default SideBar;


