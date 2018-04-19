import React, {Component} from 'react';
import Nav from "./Nav.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
// Generating a unique ID to each message.

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = 
			{
			  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
			  messages: []
			};


  }

 onNewMessage = (text) => {
 	const message = {
 		username: this.state.currentUser.name,
 		content: text
 	};
 
 this.socket.send(JSON.stringify(message))
  // console.log("what", message)
  // this.setState({
  //   messages:[...this.state.messages, message]
  // });
 }

componentDidMount() {
 this.socket = new WebSocket('ws://localhost:3001/');
    
    this.socket.onopen = (event) =>{
    
  
      console.log("connected to: ", event.target.url);

      this.socket.onmessage = (event) => {
        let messagesA = JSON.parse(event.data);
       
        console.log(messagesA);

        this.setState({
          messages:[...this.state.messages, messagesA]
        });
      };
};

  // console.log("componentDidMount <App />");
  // setTimeout(() => {
  //   console.log("Simulating incoming message");
  //   // Add a new message to the list of messages in the data store
  //   const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
  //   const messages = this.state.messages.concat(newMessage)
  //   // Update the state of the app component.
  //   // Calling setState will trigger a call to render() in App and all child components.
  //   this.setState({messages: messages})
  // }, 2000);
}



  render() {
    // console.log("Rendering <App/>");
    return (
    <div>
      <Nav/>
      <Main messageA={this.state.messages} />
      <Footer usernameA={this.state.currentUser.name} newMessage={this.onNewMessage} />
    </div>);
  }
}


export default App;
