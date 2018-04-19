import React, {Component} from 'react';

class Username extends Component {
  render(){
  // console.log("hello",this.props.usernameA)
    // console.log("Rendering <Username/>");
    return(<input className="chatbar-username" placeholder="Your Name (Optional)" 
    defaultValue={this.props.usernameA} />)
  }
}

export default Username;
