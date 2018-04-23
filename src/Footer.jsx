import React, {Component} from 'react';
import Username from "./Username.jsx";

class Footer extends Component{

 _onSubmit = (event) =>{
	if(event.key === "Enter"){
		this.props.newMessage(event.target.value);
		event.target.value = "";
	} 

};

// _onKeyDown = (event) =>{
//     if(event.key !== "Enter"){
//      this.props.typingMessage(event.target.value);
//     }
  
// }


  render(){
    // console.log("Rendering <Footer/>");
	

   return(


  <footer className="chatbar" >
  <Username newUserF={this.props.newUser}/>
  <input 
  className="chatbar-message" 
  type="text" 

  // onKeyDown={this._onKeyDown}

  onKeyPress={this._onSubmit} 

  placeholder="Type a message and hit ENTER" 
		
   />
  </footer>
)
  }
}

export default Footer;
