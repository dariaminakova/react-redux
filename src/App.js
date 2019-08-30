import React, {Component} from 'react';
import './App.css';
import SideBar from './components/SideBar';
import TicketsContainer from './components/Tickets/TicketsContainer';

class App extends Component {

  render(){

  const {tickets} = this.props;

  return (
    <div className="App">
      <SideBar />
      <TicketsContainer tickets={tickets}/>
    </div>
  );}
};

export default App;
