import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Card,Grid, FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import LastPageIcon from '@material-ui/icons/LastPage';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import AddBook from './Update';

const columns = [
  { id: 'name', label: 'Title', minWidth: 170,align:'center' },
  { id: 'code', label: 'Author', minWidth: 100,align:'center' },
  {
    id: 'population',
    label: 'ISBN number',
    minWidth: 110,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Prize',
    minWidth: 110,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Language',
    minWidth: 110,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'density',
    label: 'Genre',
    minWidth: 110,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'density',
    label: 'Action',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
 
];

const style = {
  root: {
   
    minWidth: 75,
    backgroundColor:'#ffffff',
    marginTop: 90,
    marginBottom: 80,
    marginLeft: 20,
    marginRight: 20,
       },
      
  container: {
    maxHeight: 400,
  },
  card:{
      minWidth: 75,
      backgroundColor:'#302d23',
      marginTop: 20,
      marginBottom: 10,
      marginLeft: 300,
      marginRight: 300,
      color: '#8fa5cc'
    },
  root1:{
    minWidth: 55,
    backgroundColor:'#ffffff',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,

  },
  bt1:{
    color:"#000000",
    backgroundColor:"primary",
  
    
  },
  paper1:{
    align:'right'
  },
  card:{
    minWidth: 75,
    backgroundColor:'#302d23',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 300,
    marginRight: 300,
    color: '#8fa5cc'
  },
    
    card0:{
      minWidth: 300,
      backgroundColor:'#ffffff',
      marginTop: 70,
      marginBottom: 10,
      marginLeft: 300,
      marginRight: 300,
      color: '#8fa5cc'
    },
    btg:{
      float:'right',
    }
  
  
}


  export default class BookList extends AddBook {
    constructor(props){
        super(props);
    
    }
      render(){
         const {formData} = this.props;
         let rows = []
         if(formData){
           for(var i=0; i<formData.length;i++){
            rows.push(<tr><td>{formData[i].username}</td><td>{formData[i].password}</td></tr>)
            }  
          }

  return (
    <Card style={style.card}>
      <Card style={style.root1}>
      <Grid item xs={1}>
          <Paper style={style.paper}><ListIcon/>&nbsp;Book List</Paper>
        </Grid>
   
        <Card style={style.card}></Card>        
   <Paper style={style.root}>
 
   <Card style={style.card1}>
     
  
      <TableContainer style={style.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
         
        </Table>
      </TableContainer>
      
      
     
    </Card>
    
    </Paper>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
    <Grid item xs={12}  spacing={1}>
    
                      <Grid item xs={6} >
                         
      <TablePagination
       
        component="div"
        count={rows.length}
       
    />


                      </Grid>
                      <Grid item xs={6}  style={style.btg}>
                        <FormControl>
                    <div>
    <ButtonGroup float="left"   variant="contained" color="primary" aria-label="contained primary button group">
  <Button style={style.bt1}  variant="contained"  href="#contained-buttons"><FirstPageIcon/>FIRST</Button>
  <Button style={style.bt1}  variant="contained"  href="#contained-buttons"><SkipPreviousIcon/>PREV</Button>
  </ButtonGroup>
     
  <Button type="submit" style={style.bt1}  variant="contained" color="#ffffff" href="#contained-buttons" >
                        
                         </Button>

                         <ButtonGroup marginLeft="100"  variant="contained" color="primary" aria-label="contained primary button group">
  <Button style={style.bt1}  variant="contained"  href="#contained-buttons"><SkipNextIcon/>NEXT</Button>
  <Button style={style.bt1}  variant="contained"  href="#contained-buttons"><LastPageIcon/>LAST</Button>
  </ButtonGroup>
  </div>
 
  </FormControl>
  </Grid>
  </Grid>
    </Card>
    </Card>
   
  );
        }
      }