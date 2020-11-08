import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { Card, CardContent, Grid, FormControl, Typography, TextField ,MenuItem, Select,InputLabel} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import ReplayIcon from '@material-ui/icons/Replay';
import ListIcon from '@material-ui/icons/List';
import MenuIcon from '@material-ui/icons/Menu';
import EditIcon from '@material-ui/icons/Edit';


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
                      
                        <h1 style={style.h1}>  <EditIcon/>Update Book</h1>
                         
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                         
                           <TextField
          id="outlined-password-input"
          label="Title"
          type="text"
          autoComplete="current-password"
          variant="outlined"
          onChange={this.onChangeTitle}
        />
                         <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Enter Book Title</label>
                    
                        </FormControl>
                      </Grid> 
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                         
                      
                         
                           <TextField
          id="outlined-password-input"
          label="Author"
          type="text"
          autoComplete="current-password"
          variant="outlined"
          onChange={this.onChangeAuthor}
        />
            <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Enter Book Author</label>
                     
                        
                                    
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                       
                      
                           <TextField
          id="outlined-password-input"
          label="Cover Photo URl"
          type="text"
          autoComplete="current-password"
          variant="outlined"
          onChange={this.onChangeCoverPhotoURL}
        />
                         <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Enter Cover Photo URL</label>
                         
                        
                        </FormControl>
                      </Grid> 
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                       
                      
                         
                           <TextField
          id="outlined-password-input"
          label="ISBN number"
          type="text"
          autoComplete="current-password"
          variant="outlined"
          onChange={this.onChangeISBNnumber}
        />
            <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Enter Book ISBN number</label>
                     
                          
                        </FormControl>
                      </Grid>
                      <Grid item xs={4}>
                        <FormControl fullWidth >
                         
                           <TextField
          id="outlined-password-input"
          label="Price"
          type="text"
          autoComplete="current-password"
          variant="outlined"
          onChange={this.onChangePrice}
        />
                         <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Enter Book Price</label>
                         
                        
                        </FormControl>
                      </Grid> 
                      <Grid item xs={4}>
                        <FormControl variant="outlined" fullWidth style={style.divc} >
                         
                        
                      <InputLabel id="demo-controlled-open-select-label">Select Language</InputLabel>
                      <InputLabel shrink htmlFor="age-native-label-placeholder">Select Language</InputLabel>
                      <Select
          labelId="demo-controlled-open-select-label"
          
          id="demo-controlled-open-select"
         
        >
          <MenuItem value="">
            <em>Select  Language</em>
          </MenuItem>
          <MenuItem value={10}>Tamil</MenuItem>
          <MenuItem value={20}>English</MenuItem>
          <MenuItem value={30}>Sinhalam</MenuItem>
        </Select>
        <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Please select your Language</label>
                          
                        </FormControl>
                      </Grid>  <Grid item xs={4}>
                        <FormControl variant="outlined" fullWidth style={style.divc} >
                         
                        
                      <InputLabel id="demo-controlled-open-select-label">Genre</InputLabel>
                      <InputLabel shrink htmlFor="age-native-label-placeholder">Select Genre</InputLabel>
                      <Select
          labelId="demo-controlled-open-select-label"
          
          id="demo-controlled-open-select"
       
        >
      
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Please select your Genre</label>
                         
                                       <label htmlFor="outlined-pass"></label>
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
