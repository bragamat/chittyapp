import React, {Component} from 'react';
import Username from "./Username.jsx";

class Nav extends Component {
  render(){
    // console.log("Rendering <Nav/>");

    return(
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <span className="navbar-brand" style={{float: 'right'}}>{this.props.OnlineUsers} User(s) Online</span>
    </nav>);
  }
}

export default Nav;
