// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  ticketsByPrice: []
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.TICKETS_FETCHED:
      return state.merge({
        ticketsByPrice: action.ticketsByPrice
      });
    default:
      return state;
  }
}

// selectors

export function getTicketsArray(state) {
  if (state.tickets.ticketsByPrice.length) {
    return Immutable.asMutable(state.tickets.ticketsByPrice).sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
  }
}

// export function changeFilter(newFilter) {
//   return({ type: types.FILTER_CHANGED, filter: newFilter });
// }