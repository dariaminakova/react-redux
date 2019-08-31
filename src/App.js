import React, {Component} from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import TicketsScreen from './containers/TicketsContainer';

class App extends Component {

  render(){

  return (
    <div className="App">
      <SideBar />
      <TicketsScreen />
    </div>
  );}
};

export default App;
