import React, {Component} from 'react';
import Main from "./Main.jsx";


class Messages extends Component {
  render(){
    // console.log("Rendering <Messages/>");

const messagesStates = this.props.messageB.map((item, index)=> {
  return(
        <div key={index} className="messages">
            <span className="message-username">{item.username}</span>
            <span className="message-content" >{item.content}</span>
        </div>
        );
    });

return(<div>
        {messagesStates}
       
       </div>);
  }
}


export default Messages;
