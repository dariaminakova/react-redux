import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ticketsActions from '../store/actions';
import * as ticketsSelectors from '../store/reducer';
import TicketsView from '../components/Tickets/TicketsView';
import SideBar from '../components/SideBar/SideBar'

import './TicketsContainer.css'

class TicketsScreen extends Component {

  componentDidMount() {
    this.props.dispatch(ticketsActions.fetchTickets());
  }

  render() {
    if (!this.props.tickets) return this.renderLoading();
    return (
      <div className="ticketsScreen">
        <SideBar
            />
        <TicketsView tickets={this.props.tickets}/>
      </div>
    );
  }

  renderLoading() {
    return (
      <p>  Loading...  </p>
    );
  }
}

function mapStateToProps(state) {
    return {
      tickets: ticketsSelectors.getTicketsArray(state),
      currentFilter: ticketsSelectors.getCurrentFilter(state),
    };
  }

  export default connect(mapStateToProps)(TicketsScreen);