import _ from 'lodash';

const TICKETS_LOAD = '../../tickets.json';

class TicketsService {

  async getDefaultSubreddits() {
    const url = {TICKETS_LOAD};
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to load tickets.json`);
    }
    const data = await response.json();
    const children = _.get(data, 'data.children');
    if (!children) {
      throw new Error(`Children not returned`);
    }
    return _.map(children, (subreddit) => {
      // abstract away the specifics of the reddit API response and take only the fields we care about
      return {
        origin: _.get(subreddit, 'data.origin'),
        origin_name: _.get(subreddit, 'data.origin_name'),
        destination: _.get(subreddit, 'data.destination'),
        destination_name: _.get(subreddit, 'data.destination_name'),
        departure_date: _.get(subreddit, 'data.departure_date'),
        departure_time: _.get(subreddit, 'data.departure_time'),
        arrival_date: _.get(subreddit, 'data.arrival_date'),
        arrival_time: _.get(subreddit, 'data.arrival_time'),
        carrier: _.get(subreddit, 'data.carrier'),
        stops: _.get(subreddit, 'data.stops'),
        price: _.get(subreddit, 'data.price')
      }
    });
  }

}

export default new TicketsService();