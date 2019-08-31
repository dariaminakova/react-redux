import tickets from '../tickets';

export function filterTickets (e){
    e = e.target.value;
    let flightStops = tickets.map((elem) => elem.stops);
    flightStops.find((item) => {
        if(item == e)
        console.log(item)}
    );
    
}