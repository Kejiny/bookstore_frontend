import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { Card, CardContent, Grid, FormControl, Typography, TextField ,MenuItem, Select,InputLabel} from '@material-ui/core';
import { Face } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import ReplayIcon from '@material-ui/icons/Replay';
import ListIcon from '@material-ui/icons/List';
import MenuIcon from '@material-ui/icons/Menu';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';


const style = {
  root: {
    minWidth: 75,
    backgroundColor:'#ffffff',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
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
     
  menuButton: {
    spacing: 2,
  },

  h1:{
    color:'#1052b5',
    fontFamily: "Arial"
   
  },
  bt:{
    backgroundColor:"#65ad1c"
  },
  
  bt1:{
    color:"#000000",
    backgroundColor:"#0059b3"
  },

  divc :{
   
   width:250,
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


export default class AddBook extends Component {
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

    if (this.state.username && this.state.email && this.state.password) {
      console.log(this.state.username + " " + this.state.password + " " + this.state.email)
      this.setState({
        successful: true,
        message: "Registered successfully"
      })
    } else {
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
                     
                      </Grid>
                      
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                      
                        <h1 style={style.h1}>  <CreateSharpIcon/>Update Book</h1>
                          {/* <label htmlFor="username">Username</label> */}
                          
                          {/* <TextField type="text" name="username" value={this.state.username}
                            onChange={this.onChangeUsername}/> */}
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          {/* <label htmlFor="email">Email</label>
                          <TextField type="text" name="email" value={this.state.email}
                            onChange={this.onChangeEmail}/> */}
                      
                           <TextField
          id="outlined-password-input"
          label=""
          type="text"
          autoComplete="current-password"
          variant="outlined"
        />
                         <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Enter Book Title</label>
                    
                        </FormControl>
                      </Grid> 
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          {/* <label htmlFor="email">Email</label>
                          <TextField type="text" name="email" value={this.state.email}
                            onChange={this.onChangeEmail}/> */}
                      
                         
                           <TextField
          id="outlined-password-input"
          label=""
          type="text"
          autoComplete="current-password"
          variant="outlined"
        />
            <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Enter Book Author</label>
                     
                            {/* <TextField
                                 id="outlined-text"
                                  label="Username"
                                  type="text"
                                  name="username"
                                  value={this.state.username}
                                  onChange={this.onChangeUsername}
                                  errorVisible={this.state}
                                InputLabelProps={{
                                  shrink: true,
                                       }}
                                 variant="outlined"
                                       /> */}
                                    
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          {/* <label htmlFor="email">Email</label>
                          <TextField type="text" name="email" value={this.state.email}
                            onChange={this.onChangeEmail}/> */}
                      
                           <TextField
          id="outlined-password-input"
          label=""
          type="text"
          autoComplete="current-password"
          variant="outlined"
        />
                         <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Enter book Photo URL</label>
                         
                        
                        </FormControl>
                      </Grid> 
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          {/* <label htmlFor="email">Email</label>
                          <TextField type="text" name="email" value={this.state.email}
                            onChange={this.onChangeEmail}/> */}
                      
                         
                           <TextField
          id="outlined-password-input"
          label="ISBN number"
          type="text"
          autoComplete="current-password"
          variant="outlined"
        />
            <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Enter Book ISBN number</label>
                     
                            {/* <TextField
                                 id="outlined-text"
                                  label="Username"
                                  type="text"
                                  name="username"
                                  value={this.state.username}
                                  onChange={this.onChangeUsername}
                                  errorVisible={this.state}
                                InputLabelProps={{
                                  shrink: true,
                                       }}
                                 variant="outlined"
                                       /> */}
                                   
                        </FormControl>
                      </Grid>
                      <Grid item xs={4}>
                        <FormControl fullWidth >
                          {/* <label htmlFor="email">Email</label>
                          <TextField type="text" name="email" value={this.state.email}
                            onChange={this.onChangeEmail}/> */}
                      
                           <TextField
          id="outlined-password-input"
          label="Price"
          type="text"
          autoComplete="current-password"
          variant="outlined"
        />
                         <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Enter Book Price</label>
                         
                        
                        </FormControl>
                      </Grid> 
                      <Grid item xs={4}>
                        <FormControl variant="outlined" fullWidth style={style.divc} >
                         
                          {/* <label htmlFor="email">Email</label>
                          <TextField type="text" name="email" value={this.state.email}
                            onChange={this.onChangeEmail}/> */}
                      <InputLabel id="demo-controlled-open-select-label">Select Language</InputLabel>
                      <InputLabel shrink htmlFor="age-native-label-placeholder">Select Language</InputLabel>
                      <Select
          labelId="demo-controlled-open-select-label"
          
          id="demo-controlled-open-select"
          // open={open}
          // onClose={handleClose}
          // onOpen={handleOpen}
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
                  
                            {/* <TextField
                                 id="outlined-text"
                                  label="Username"
                                  type="text"
                                  name="username"
                                  value={this.state.username}
                                  onChange={this.onChangeUsername}
                                  errorVisible={this.state}
                                InputLabelProps={{
                                  shrink: true,
                                       }}
                                 variant="outlined"
                                       /> */}
                                       {/* <label htmlFor="outlined-pass">Please enter username</label> */}
                        </FormControl>
                      </Grid>  <Grid item xs={4}>
                        <FormControl variant="outlined" fullWidth style={style.divc} >
                         
                          {/* <label htmlFor="email">Email</label>
                          <TextField type="text" name="email" value={this.state.email}
                            onChange={this.onChangeEmail}/> */}
                      <InputLabel id="demo-controlled-open-select-label">Genre</InputLabel>
                      <InputLabel shrink htmlFor="age-native-label-placeholder">Select Genre</InputLabel>
                      <Select
          labelId="demo-controlled-open-select-label"
          
          id="demo-controlled-open-select"
          // open={open}
          // onClose={handleClose}
          // onOpen={handleOpen}
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
                     
                            {/* <TextField
                                 id="outlined-text"
                                  label="Username"
                                  type="text"
                                  name="username"
                                  value={this.state.username}
                                  onChange={this.onChangeUsername}
                                  errorVisible={this.state}
                                InputLabelProps={{
                                  shrink: true,
                                       }}
                                 variant="outlined"
                                       /> */}
                                       <label htmlFor="outlined-pass"></label>
                        </FormControl>
                      </Grid>
                      <Grid item xs={3}></Grid>
                      <Grid item xs={3}></Grid>
                      <Grid item xs={6}>
                        <FormControl>
                        <div>
                        <Button type="submit" variant="contained" style={style.bt} href="#contained-buttons" >
                        <SaveIcon /> SAVE
                         </Button>&nbsp;&nbsp;

                         <Button type="submit" style={style.bt1}  variant="contained" color="primary" href="#contained-buttons" >
                           <ReplayIcon/>RESET
                         </Button>&nbsp;&nbsp;
                         {/* <IconButton edge="start" style={style.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton> */}
                       
                         <Button variant="contained" style={style.bt1}color="primary" href="#contained-buttons">
                                     <ListIcon/>BOOK LIST
      </Button>
      
      </div>          </FormControl>
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
