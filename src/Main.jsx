import React, {Component} from 'react';
import Messages from "./Messages.jsx";


class Main extends Component {
  render() {
    // console.log("Rendering <Main/>");
    	// console.log(this.props.messageA)
    return(
  <main className="messages">
    <Messages color={this.props.userColor} messageB={this.props.messageA}/>
</main>);
  }
}

export default Main;
