import React, { Component } from 'react';
import {Router, Route,Redirect} from 'react-router-dom';
import './App.css';
import Home from './Views/Home.js'
import Signup from './Views/Signup'
import Login from './Views/Login'
import Staff from './Views/StaffDash'
import theme from './materialTheme'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import StudentDashboardMain from './studentDashboard/studentDashboardMain'
import history from './history';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      isLoggedIn:false
    };
  }

  componentDidMount()
  {
    if( localStorage.getItem('token') !='null')
      this.setState({handleLogIn:'true'})
  }

  handleLogIn = ()=>
  {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (

        <Router history={history}>
          <div>
            <Route exact={true} path='/signup' component={Signup} />
            <Route exact={true} path='/login' render = {(props)=>(<Login {...props} handleLogIn={this.handleLogIn}  />)} />
            <AppBar position="static" style={{ flex: 1 }}>
              <Toolbar>
              <div>
              { isLoggedIn ? 
                (<Button  color="secondary" onClick={()=>{localStorage.clear(); this.handleLogIn(); history.push('/login')}}>
                  Logout
                </Button>)
                :
                (<Button  color="secondary" onClick={()=>{history.push('/login')}}>
                  Login
                </Button>)
              }
              </div>
              </Toolbar>
             </AppBar>
            <Route exact={true} path='/' component={Home} />
            <Route exact={true} path='/staff' component ={Staff}/>
            <Route exact={true} path='/student' component={StudentDashboardMain}/>
          </div>
        </Router>
    );
  }
}

export default App;
