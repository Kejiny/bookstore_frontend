import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { Paper, Typography, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import BoardUser from "./components/BoardUser";
import Admin from "./components/Admin";
import BoardAdmin from "./components/BoardAdmin";
import { AccountCircle,} from "@material-ui/icons";
import Footer from "./components/Footer";
import Update from "./components/Update";
import BookList from "./components/BookList";
import AddNewUser from"./components/AddNewUser";
import UpdateUser from"./components/UpdateUser";


const style = {
  paper: {
    flexGrow: 1,
    backgroundColor: '#262626',
    color: '#c5cae9'
  },
  menuButton: {
    spacing: 2,
  },
  link: {
    underline: 'none'
  },
  appBar: {
    backgroundColor: "#262626"
  },
  logo:{
     width:"50px"
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    let user;
    if (localStorage.getItem('username')) {
      user = {
        username: localStorage.getItem('username'),
        id: localStorage.getItem('id'),
        email: localStorage.getItem('email'),
        roles: localStorage.getItem('roles'),
      };
    }

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  logOut () {
    localStorage.clear()
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
      <Router>
        <div>
          <AppBar position="static" style={style.appBar}>
            <Toolbar>
              <Paper style={style.paper} elevation={0}>




                <Button href="/" color='inherit'>
                <img style={style.logo} src="https://www.nicepng.com/png/full/251-2515797_no-circle-book-book-logo-png.png"></img>
                  <Typography><strong>&nbsp;&nbsp;Book Shop</strong></Typography>
                </Button>
                <Button href="/home" color='inherit'>
                  <strong>Home</strong>
                </Button>


                  <Button href="/Addbook" color='inherit'>
                    <strong>Add Book</strong>
                  </Button>

{ currentUser&&(
  <Button href="/booklist" >
    <strong>BookList</strong>
  </Button>
)}




                {showAdminBoard && (
                  <Button href="/admin" color='inherit'>
                    <strong>Admin Board</strong>
                  </Button>
                )}
                {currentUser && (
                  <Button href="/user" color='inherit'>
                    <strong>User</strong>
                  </Button>
                )}
              </Paper>

              {currentUser ? (
                <Paper style={{'backgroundColor': '#262626', 'color': '#c5cae9'}} elevation={0}>
                  <Button href="/profile" color='inherit'>
                    <AccountCircle style={{ fontSize: 40 }}/>
                    <strong>{currentUser.username}</strong>
                  </Button>
                  <Button href="/login" color='inherit' onClick={this.logOut}>
                    <strong>LogOut</strong>
                  </Button>
                </Paper>
              ) : (
                <Paper style={{'backgroundColor': '#262626', 'color': '#c5cae9'}} elevation={0}>
                  <Button href="/login" color='inherit'>
                    <strong>Login</strong>
                  </Button>
                  <Button href="/register" color='inherit'>
                    <strong>Sign Up</strong>
                  </Button>
                </Paper>
              )}
            </Toolbar>
          </AppBar>

          <div>
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/addbook" component={AddBook} />
              <Route path="/user" component={BoardUser} />
              <Route path="/editbook" component={EditBook} />
              {/* <Route path="/admin" component={BoardAdmin} /> */}
              <Route path="/admin" component={Admin} />
              <Route path="/booklist" component={BookList} />
              <Route path="/update" component={Update} />
              <Route path="/addnewuser" component={AddNewUser} />
              <Route path="/updateuser" component={UpdateUser} />

            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
