import * as types from './actionTypes';
import redditService from '../services/reddit';

export function fetchTickets() {
  return async(dispatch) => {
    try {
      const ticketsArray = await redditService.getDefaultSubreddits();
      dispatch({ 
        type: types.TICKETS_FETCHED, 
        ticketsByPrice: ticketsArray });
    } catch (error) {
      console.error(error);
    }
  };
}