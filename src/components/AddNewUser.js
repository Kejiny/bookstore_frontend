import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { Card, CardContent, Grid, FormControl, Typography, TextField ,MenuItem, Select,InputLabel} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReplayIcon from '@material-ui/icons/Replay';
import ListIcon from '@material-ui/icons/List';
import MenuIcon from '@material-ui/icons/Menu';
import AddBoxIcon from '@material-ui/icons/AddBox';


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
    color:'#000000',
  
   
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


export default class AddNewUser extends Component {
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
  

 
  
  handleRegister = (e) => {
    this.props.history.push('./booklist');
    window.location.reload();
  }
  Booksave = (e) => {
    e.preventDefault();
    this.setState({
        successful:true,
        message:"Book saved Sucessfully"
      
      })
  }
  Bookupdate = (e) => {
    e.preventDefault();
    this.setState({
        successful:false,
        message:"Book update Sucessfully"
      
      })
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
                      
                        <h1 style={style.h1}>  < AddBoxIcon/>Add New User</h1>
                         
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                         
                           <TextField
          required id="outlined-password-input"
          label="Username"
          type="text"
          autoComplete="current-password"
          variant="outlined"
          onChange={this.onChangeTitle}
        />
                         <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Enter username</label>
                    
                        </FormControl>
                      </Grid> 
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                         
                      
                         
                           <TextField
         required id="outlined-password-input"
          label="Email"
          type="text"
          autoComplete="current-password"
          variant="outlined"
          onChange={this.onChangeAuthor}
        />
            <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Enter Email Address</label>
                     
                        
                                    
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                       
                       
                        <FormControl variant="outlined" fullWidth  >
                         
                        
                         <InputLabel id="demo-controlled-open-select-label">Select Role</InputLabel>
                         <InputLabel shrink htmlFor="age-native-label-placeholder"> Role</InputLabel>
                         <Select
             labelId="demo-controlled-open-select-label"
             
             id="demo-controlled-open-select"
            
           >
             <MenuItem value="">
               <em></em>
             </MenuItem>
             <MenuItem value={10}>Role_Admin</MenuItem>
             <MenuItem value={20}>Role_User</MenuItem>
          
           </Select>
           <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Please select your Role</label>
                             
                           </FormControl></Grid>
                         
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                       
                      
                         
                           <TextField
          required id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={this.onChangeISBNnumber}
        />
            <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Enter Password</label>
                     
                          
                        </FormControl>
                      </Grid>
                    
                    
                      <Grid item xs={3}></Grid>
                      <Grid item xs={3}></Grid>
                      <Grid item xs={6}>
                        <FormControl>
                        <div>
                        <Button type="submit" variant="contained" style={style.bt} href="#save" >
                        <SaveIcon /> SAVE
                         </Button>&nbsp;&nbsp;

                         <Button type="submit" style={style.bt1}  variant="contained" color="primary" href="#contained-buttons" >
                           <ReplayIcon/>RESET
                         </Button>&nbsp;&nbsp;
                      
                         <Button href="#booklist" variant="contained" style={style.bt1}color="primary" >
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
