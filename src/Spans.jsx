import React, {Component} from 'react';

class Spans extends Component {
  render(){
    console.log("Rendering <Spans/>");
		return(<div className="messages">
       <span className="message-username">Anonymous1</span>
       <span className="message-content">I won't be impressed with technology until I can download food.</span>
       </div>);
  }
}


export default Spans;
