import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ticketsActions from '../store/actions';
import * as topicsSelectors from '../store/reducer';
import TicketsView from '../components/Tickets/TicketsView';

class TicketsScreen extends Component {

  componentDidMount() {
    this.props.dispatch(ticketsActions.fetchTickets());
  }

  render() {
    if (!this.props.tickets) return this.renderLoading();
    return (
      <div className="TicketsScreen">
        <TicketsView tickets={this.props.tickets}/>
      </div>
    );
  }

  renderLoading() {
    return (
      <p>Loading...</p>
    );
  }
}

function mapStateToProps(state) {
    return {
      tickets: topicsSelectors.getTicketsArray(state)
    };
  }
  
  export default connect(mapStateToProps)(TicketsScreen);