import React, { Component } from 'react';

// CSS
import '../css/App.css';

// Components
import Navbar from './Navbar';
import Preloader from './Preloader';
import DialogsList from './DialogsList';
import MessagesBox from './MessagesBox';

// Libs
import io from 'socket.io-client';
import * as config from '../config';
const socket = io(config.API);

class App extends Component {
  state = {
    isLoading: true,
    response: null
  }

  componentDidMount() {
    socket.on("connection", data => {
      this.setState({
        response: data,
        isLoading: false
      })
    })
  }

  render() {
    return (
      this.state.isLoading ? 
      
      <Preloader /> : 
      
      <div className="main animated fadeIn">
        <div className="sidenav">
          <ul>
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
        </div>
        
        <Navbar header="Messages" />
        <div className="row">

          { /* Dialogs */ }
          <div className="col show-on-large l2">
            <DialogsList />
          </div>

          { /* Messages */ }
          <div className="col s12 l10">
            <MessagesBox data={this.state.response} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
