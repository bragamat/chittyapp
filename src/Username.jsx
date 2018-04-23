import React, {Component} from 'react';


class Username extends Component {
  _onNewUser = (event) =>{
    if(event.key === "Enter"){
      if(event.target.value == ""){
        this.props.newUserF("Anonymous");
      } else {
        
     this.props.newUserF(event.target.value);
      }
    }
  

  }

  render(){
	// console.log(username)
  // console.log("hello",this.props.usernameA)
    // console.log("Rendering <Username/>");
    return(
    <input className="chatbar-username" 

    placeholder="Your Name (Optional)" 
    
    onKeyPress={this._onNewUser} />)
  }
}

export default Username;
