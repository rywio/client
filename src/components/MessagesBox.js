import React, { Component } from 'react';

export default class MessagesBox extends Component {
  render() {
    return (
      <div className="messages-box">
        <p>{this.props.data}</p>
      </div>
    )
  }
}
