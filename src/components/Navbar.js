import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// CSS
import '../css/Navbar.css';

let ticking = false;

export default class Navbar extends Component {
  state = {
    shadow: ""
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 0) {
          this.setState(state => state.shadow = " shadow-fade-in")
        } else {
          this.setState(state => state.shadow = " shadow-fade-out")
        }

        ticking = false;
      });
   
      ticking = true;
    }
  };

  render() {
    return (
      <div className="navbar-fixed">
        <nav className={"nav" + this.state.shadow}>
          <div className="container">
            <div className="brand-logo center">
              <Link to="/dialogs">{this.props.header}</Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
