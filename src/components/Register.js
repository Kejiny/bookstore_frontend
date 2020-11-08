import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { Card, CardContent, Grid, FormControl, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const style = {
  root: {
    minWidth: 75,
    backgroundColor:'#ffffff',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 100,
    marginRight: 100,
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
   
   
  }
}
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: "",
      password: "",
      message: "",
      successful: false
    };
  }
  

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister = (e) => {
    e.preventDefault();
    const {username,email,password } = this.state;
    if (this.state.username && this.state.email && this.state.password) {
      console.log(this.state.username + (" ") + this.state.password + " " + this.state.email)
    
      this.setState({
        successful: true,
        message: "Registered successfully"
      })
    }else if(this.state.username = ''){
      this.setState({
      successful: false,
        message: "username is empty"
      })
    } 
    else {
      this.setState({
        successful: false,
        message: "username/password/email is empty"
        
      })
    }
  }
 

  render() {
    return (
      <Grid container>
        <Grid item xs={4}/>
        <Grid item xs={1}/>
        <Grid item xs={3}>
        <Card style={style.rt}>
              <CardContent>
          <Card style={style.root}>
              <CardContent>
                <form onSubmit={this.handleRegister}>
                  {!this.state.successful && (
                  <Grid container spacing={1}>
                      <Grid item xs={12}>
                      <h1 style={style.h1}>Register Accounts at Books Shop</h1>
                      </Grid>
                      
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                         
                            <TextField
                                 id="outlined-text"
                                  label="Username"
                                  type="text"
                                  name="username"
                                  required id="standard-required"
                                  value={this.state.username}
                                  onChange={this.onChangeUsername}
                                  errorVisible={this.state}
                              
                                 variant="outlined"
                                       />
                                       <label htmlFor="outlined-pass">Please enter username</label>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                      

<TextField
          id="outlined-pass"
          label="Email"
          type="email"
          value={this.state.email}
                                  onChange={this.onChangeEmail}
                                      
          variant="outlined"
        />
        <label htmlFor="outlined-pass">Please enter email</label>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                      

<TextField
          id="outlined-pass"
          label="Password"
          type="password"
           onChange={this.onChangePassword}
          value={this.state.password}
         variant="outlined"
         />
                            
                     <label htmlFor="outlined-pass">Please enter Password</label>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                        
                        <Button  variant="contained" color="primary" onClick={this.handleRegister}  >
                            Signup
                         </Button>
                        </FormControl>
                      </Grid>
                  </Grid>
                  )}
                  {
                    this.state.message && (
                    <div>
                      <Typography color={this.state.successful ? 'primary' : 'error'} variant="overline" display="block" gutterBottom>
                          <strong>{this.state.message}</strong>
                      </Typography>
                    </div>
                  )
                  }
                </form>
              </CardContent>
        </Card>
        </CardContent>
        </Card>
        
           </Grid>
        <Grid item xs={4}/>
      </Grid>
    );
  }
}
