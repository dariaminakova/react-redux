const TICKETS_LOAD = 'http://localhost:3000/';

class TicketsService {

  async getDefaultSubreddits() {
    const url = `${TICKETS_LOAD}tickets.json`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to load tickets.json ${response.status}`);
    }

    const data = await response.json();
    return (data.tickets) 
  }
}

export default new TicketsService();