import React, { Component } from "react";

import Button from '@material-ui/core/Button';
import { Card, CardContent, Typography, Grid, FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import validator from 'validator';
import Input from 'react-validation/build/input';
import Form from 'react-validation/build/form';

const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};
 
const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`
  }
};
 
const lt = (value, props) => {
  // get the maxLength from component's props
  if (!value.toString().trim().length > props.maxLength) {
    // Return jsx
    return <span className="error">The value exceeded {props.maxLength} symbols.</span>
  }
};
 
const password = (value, props, components) => {
  
  if (value !== components['confirm'][0].value) { 
   
    return <span className="error">Passwords are not equal.</span>
  }
};




const style = {
 
  root: {
    minWidth: 75,
    backgroundColor:'#ffffff',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 120,
    marginRight: 120,
    color: '#8fa5cc'
  },
  rt: {
    minWidth: 900,
    backgroundColor:'#302d23',
    marginTop: 50,
    marginBottom: 50,
    marginRight: 80,
    marginLeft: -300,
    
  
     },
     h1:{
       color:'#1052b5'
      
      
     },
    
     
  
    

}


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin = (e) => {
    e.preventDefault();

    if (this.state.username && this.state.password) {
          console.log("username = " + this.state.username)
          console.log("password = " + this.state.password)
          localStorage.setItem('id', '1');
          localStorage.setItem('username', this.state.username);
          localStorage.setItem('email', 'kejiny104@gmail.com');
          localStorage.setItem('roles', 'ROLE_ADMIN');
          this.props.history.push("/profile");
          window.location.reload();
    } else {
      this.setState({
        message: "Empty username or password"
      })
    }
  }

  render() {
    return (
      <Grid container >
        <Grid item xs={5}/>
        <Grid item xs={2}>
        <Card style={style.rt}>
              <CardContent>
              
          <Card style={style.root}>
              <CardContent >
                <Form onSubmit={this.handleLogin}>
                  <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <h1 style={style.h1}>Login to Books <br></br>Shop</h1>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                       
                         
                         <TextField type="text"
          id="outlined-pass"
          label="Usename"
          type="text"
          name='username'
          variant="outlined"
          value={this.state.username}
          onChange={this.onChangeUsername}
        />

        <label htmlFor="outlined-text">Please enter username</label>
        

                      </FormControl>
                      </Grid>
                      
                      
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                       
                          <TextField type="password"
          id="outlined-pass"
          label="Password"
          type="password"
         name='password'
          variant="outlined"
          value={this.state.password}
                            onChange={this.onChangePassword}
          
          
        />
      
        <label htmlFor="outlined-pass">Please enter Password</label>
                            
                        </FormControl>
                      </Grid>
                          
                      <Grid item xs={12}>
                        <FormControl>
                         
                        <Button variant="contained" color="primary" onClick={this. handleLogin}>
                            Login
                         </Button>
                          
                        </FormControl>
                      </Grid>
                  </Grid>
                  {this.state.message && (
                    <div>
                      <Typography color='error' variant="overline" display="block" gutterBottom>
                          <strong>{this.state.message}</strong>
                      </Typography>
                    </div>
                  )}
                </Form>
              </CardContent>
        </Card>
        </CardContent>
        </Card>
        </Grid>
        <Grid item xs={5}/>
      </Grid>
    );
  }
}