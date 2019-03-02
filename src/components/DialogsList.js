import React, { Component } from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:4000");

export default class DialogsList extends Component {
  componentWillMount() {
    socket.on("connection", (data) => {
      console.log(data)
    })
  }

  render() {
    return (
      <div className="dialogs-list">
        
      </div>
    )
  }
}
