import React, {Component} from 'react';
import Main from "./Main.jsx";


class Messages extends Component {

_colorDefinition = () =>{
  this.props.randomColor();
  console.log(this.props.randomColor())
}

  render(){
    // console.log("Rendering <Messages/>");

const messagesStates = this.props.messageB.map((item, index)=> {
  return(
        <div key={index} className="messages">
            <span style={{backgroundColor: this._colorDefinition}} className="message-username">{item.user}</span>
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
