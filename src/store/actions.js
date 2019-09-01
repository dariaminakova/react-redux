import _ from 'lodash';
import * as types from './actionTypes';
import redditService from '../services/reddit';

export function fetchTickets() {
  return async(dispatch, getState) => {
    try {
      const subredditArray = await redditService.getDefaultSubreddits();
      const ticketsByPrice = _.keyBy(subredditArray, (subreddit) => subreddit.price);
      dispatch({ type: types.TICKETS_FETCHED, ticketsByPrice });
    } catch (error) {
      console.error(error);
    }
  };
}