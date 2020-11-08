import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import addnewuser from './AddNewUser';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card:{
   
    
    marginLeft:60,
   marginRight:60,
    
     backgroundColor: '#323633',
     height:450,
  borderRadius:5,
    
  },
  card1:{
   
     backgroundColor: '#91685F',
     height:300,
  borderRadius:5,
  marginLeft:160,

  },
  card2:{
   
     backgroundColor: '#91685F',
     height:300,
  borderRadius:5,
  marginRight:160,

  },
  header:{
    padding: theme.spacing(3),
    textAlign: 'center',
    color: 'white',
    backgroundColor:'#69433c',
    fontSize:30,
    borderRadius:5,
    marginRight:160,
    marginLeft:160,
    
  },
  logo:{
    width:"350px",
    marginTop:-100,
    height:300,
    marginLeft:30,
  },
  logo1:{
  width:"500px",
  marginTop:-30,
  marginLeft:-70
  
},
gr:{
  marginTop:-40,
  fontSize:20,
},
gr1:{
  marginTop:-55,
  fontSize:20,
}
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
        
        </Grid>
        <Grid item xs>
          
        </Grid>
        <Grid item xs>
         
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
       
        </Grid>
        
        <Grid item xs={9}>
        <br></br>
        <Card className={classes.card}>
      <CardContent>
      <Grid container spacing={3}>
      
      <Grid item xs={12}>
          <Paper className={classes.header}>Welcome to Admin Panel</Paper>
        </Grid>
        <Grid item xs={6}>
          
          <Card  className={classes.card1}>
      <CardContent>
        <br></br>
      <img className={classes.logo} src="https://icon-library.com/images/group-icon-png/group-icon-png-13.jpg"></img>
       
      
          <div>
            <br></br>
          <label className={classes.gr} >Manage users</label>
          
                        
                        <br></br>
                        <Button variant="contained" href='/addnewuser'>ADD Users</Button>
                        &nbsp;&nbsp;
                   
                       <Button variant="contained">View Users</Button>
                 </div>
              
        </CardContent>
      
        </Card>
          
        </Grid>
        <Grid item xs={6}>
        <Card  className={classes.card2}>
      <CardContent>
      <img className={classes.logo1} src="https://i.pinimg.com/originals/af/d1/e6/afd1e65cacca8822d1f857d5182b3aed.png"></img>
      <div>
            <br></br>
          <label className={classes.gr1} >Manage Books</label>
          
                        
                        <br></br>
                        <Button variant="contained">ADD Book</Button>
                        &nbsp;&nbsp;
                   
                       <Button variant="contained">View Books</Button>
                 </div>
        </CardContent>
        </Card>
        </Grid>
        </Grid>
        </CardContent>
        </Card>
        </Grid>
        <Grid item xs>
        
        </Grid>
      </Grid>
    </div>
  );
}
