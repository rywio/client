import React, { Component } from 'react';

// CSS
import '../css/App.css';

// Components
import Navbar from './Navbar';
import DialogsList from './DialogsList';
import MessagesBox from './MessagesBox';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Navbar header="Messages" />
        <div className="row">

          { /* Dialogs */ }
          <div className="col show-on-large l2">
            <DialogsList />
          </div>

          { /* Messages */ }
          <div className="col s12 l10">
            <MessagesBox />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
