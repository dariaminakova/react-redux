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
    if (!this.props.rowsById) return this.renderLoading();
    return (
      <div className="TicketsScreen">
        <TicketsView
          rowsIdArray={this.props.rowsIdArray}
          rowsById={this.props.rowsById}
          renderRow={this.renderRow} />
      </div>
    );
  }

  renderLoading() {
    return (
      <p>Loading...</p>
    );
  }

  renderRow(row) {
    return (
      <div>
        <h3>{row.title}</h3>
        <p>{row.description}</p>
      </div>
    )
  }

}

function mapStateToProps(state) {
    return {
      rowsById: topicsSelectors.getTicketsArray(state),
    };
  }
  
  export default connect(mapStateToProps)(TicketsScreen);