// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  ticketsByPrice: [],
  currentFilter: undefined
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.TICKETS_FETCHED:
      return state.merge({
        ticketsByPrice: action.ticketsByPrice
      });
      case types.FILTER_CHANGED:
          return state.merge({
            currentFilter: action.filter
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

export function getCurrentFilter(state) {
  return state.tickets.currentFilter;
}