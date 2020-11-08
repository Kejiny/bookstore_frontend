import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { Card, CardContent, Grid, FormControl, Typography, TextField ,MenuItem, Select,InputLabel} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReplayIcon from '@material-ui/icons/Replay';
import ListIcon from '@material-ui/icons/List';
import AddBoxIcon from '@material-ui/icons/AddBox';
import BookList from './BookList';


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
  },
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
      ebt: '',
      eba: "",
      ecpu: "",
      ebin: "",
      
      ebp:"",
      formValid: false,
      formData: [],
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
  cancelCourse = () => { 
    this.setState({
      inputVal_1: "",
      inputVal_2: "",
      inputVal_3: "",
      inputVal_4: "",
      inputVal_5: "",
      inputVal_6: "",
      inputVal_7: "selectedIndex = 0",
    })
  }

  
  handleRegister = (e) => {
    e.preventDefault();
    if(this.state.ebt != "" && this.state.eba != "" && this.state.ecpu != "" && this.state.ebin != "" && this.state.ebp != "" 
     && this.state.ebt != null && this.state.eba != null && this.state.ecpu != null && this.state.ebin != null && this.state.ebp != null){
        let object = {}
        object.Ebt = this.state.ebt;
        object.Eba = this.state.eba;
        object.Ecpu = this.state.ecpu;
        object.Ebin = this.state.ebin;
        object.Ebp = this.state.ebp;
        object.Ebp = this.state.ebp;
        

        this.setState({
           formValid: true,
           formData: object
          })
          this.dropDownListObject.value = null;

     }
  }


  render() {
    return (
      < div id="form">
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
                      
                        <h1 style={style.h1}>  < AddBoxIcon/>Add New Book</h1>
                         
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                         
                           <TextField
          required id="outlined-password-input"
          label="Title"
          name="ebt"
          type="text"
          autoComplete="current-password"
          variant="outlined"
          onChange={this.onChangeTitle}
          value={this.state.inputVal_1}
        />
                         <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Enter Book Title</label>
                    
                        </FormControl>
                      </Grid> 
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                         
                      
                         
                           <TextField
          required id="outlined-password-input"
          label="Author"
          name="eba"
          type="text"
          autoComplete="current-password"
          variant="outlined"
          onChange={this.onChangeAuthor}
          value={this.state.inputVal_2}
        />
            <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Enter Book Author</label>
                     
                        
                                    
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                       
                      
                           <TextField
          required id="outlined-password-input"
          label="Cover Photo URl"
          name="ecpu"
          type="text"
          autoComplete="current-password"
          variant="outlined"
          onChange={this.onChangeCoverPhotoURL}
          value={this.state.inputVal_3}
        />
                         <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Enter Cover Photo URL</label>
                         
                        
                        </FormControl>
                      </Grid> 
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                       
                      
                         
                           <TextField
          required id="outlined-password-input"
          label="ISBN number"
          name="ebin"
          type="text"
          autoComplete="current-password"
          variant="outlined"
          onChange={this.onChangeISBNnumber}
          value={this.state.inputVal_4}
        />
            <label htmlFor="outlined-pass">&nbsp;&nbsp;&nbsp;&nbsp;Enter Book ISBN number</label>
                     
                          
                        </FormControl>
                      </Grid>
                      <Grid item xs={4}>
                        <FormControl fullWidth >
                         
                           <TextField
          required id="outlined-password-input"
          label="Price"
          type="text"
          name="ebp"
          autoComplete="current-password"
          variant="outlined"
          onChange={this.onChangePrice}
          value={this.state.inputVal_5}

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
          <MenuItem value="" name="xyz" id="language">
            <em>Select  Language</em>
          </MenuItem>
          <MenuItem value={10}>Tamil</MenuItem>
          <MenuItem value={20}>English</MenuItem>
          <MenuItem value={30}>Russian</MenuItem>
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
      
          <MenuItem value={this.state.inputVal_7}>
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
                        <Button type="submit" variant="contained" style={style.bt} href="#save" onClick={this.Booksave} >
                        <SaveIcon /> SAVE
                         </Button>&nbsp;&nbsp;

                         <Button type="reset" style={style.bt1}  variant="contained" color="primary" href="#contained-buttons" name="cancelCourse" 
                         onClick={this.cancelCourse}
                          >
                           <ReplayIcon/>RESET
                         </Button>&nbsp;&nbsp;
                         
                      
                         <Button href="/booklist" variant="contained" style={style.bt1}color="primary" >
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
                {this.state.formValid ? this.renderBookList() : ''}
              </CardContent>
        </Card>
        </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
      </div>  );
  }
}
