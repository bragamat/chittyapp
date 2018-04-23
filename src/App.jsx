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
			  currentUser: "",
        newUserB:"", // optional. if currentUser is not defined, it means the user is Anonymous
			  messages: [],
        onlineUsers: 1,
        color: "purple"
			};

  }

  onNewUser = (user) =>{
   const userB = {
    type: "updatingUser",
    user: user,
    content: this.state.newUserB
  };
  this.setState({
    currentUser: userB.user,
    newUserB: this.state.currentUser,
    messages: [...this.state.messages, `${userB.user} changed their name to ${this.state.currentUser}.`]
  })

  this.socket.send(JSON.stringify(userB))

  };

  randomColor = () =>{
  let CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
   let color = Math.Floor(Math.random() * (CSS_COLOR_NAMES.length - 1));
    this.setState({
      color: color
    })
  }

 onNewMessage = (text) => {
  const message = {
    type: "newMessage",
    user: this.state.currentUser,
    content: text
  };
 
 this.socket.send(JSON.stringify(message))

 }

 // onTypeMessage = (text) =>{
 //  this.socket.send(JSON.stringify(text));
 // }


componentDidMount() {
 this.socket = new WebSocket('ws://localhost:3001/');
    
    this.socket.onopen = (event) => {

      console.log("connected to: ", event);
      console.log(event.currentTarget.onopen.length)

      this.socket.onmessage = (event) => {
        let messagesA = JSON.parse(event.data);
      
      console.log(messagesA)
        switch (messagesA.type){
          
          case "userUpdate":
            
              this.setState({
                onlineUsers: messagesA.userCount
              });
            break;

          case "newMessage":
              this.setState({
                currentUser: messagesA.user,
                messages:[...this.state.messages, messagesA],
              });
            break;
          case "changedUser":
          console.log(messagesA);
              this.setState({
                messages:[...this.state.messages, messagesA],
                currentUser: messagesA.user,
              });
            break;
            default:
        }

      };

};

}



  render() {
    // console.log("Rendering <App/>");
    return (
    <div>
      <Nav OnlineUsers={this.state.onlineUsers}/>
      <Main userColor={this.state.color}   messageA={this.state.messages} />
      <Footer 
      // typingMessage={this.onTypeMessage}

      newUser={this.onNewUser} 

      newMessage={this.onNewMessage} />
    </div>);
  }
}


export default App;
