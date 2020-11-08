import React, { Component } from "react";
import Card from '@material-ui/core/Card';

const style={

 
  txt:{
    color :"White",
    fontSize:"40px",
    },

    lab:{
      color:"White"
    },
  card:{
    marginLeft:350,
    marginRight:350,
    marginTop:50,
    minWidth:30,
    backgroundColor:"#302d23",
    height:200,
    borderRadius: 8,
  },
  card2:{
    marginLeft:20,
    marginRight:20,
    marginTop:20,
     minWidth:30,
    backgroundColor:"#302d23",
    height:150,
    borderRadius: 7,
  }
 }


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
 
  componentDidMount() {
        this.setState({
          content: "Welcome to Book Shop"
      
          
        });
  }
  

  render() {
    return (
 
       
        
       <Card style={style.card} boxShadow={3}>
         <Card style={style.card2}>
           <label html for h1 style={style.txt}>Welcome to Book Shop</label>
           <label style={style.lab} htmlFor="outlined-pass">Good friends,good books and a sleepy conscience:this is the ideal life.</label><br></br>
           <label style={style.lab} htmlFor="outlined-pass">-Mark Twain</label>
         </Card>
         
         </Card> 
               
    );
  }
}
