import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import 'typeface-roboto';



import {Home, Profile, Page404} from "./components";
import LoginPage from "./components/LoginPage";
import {Footer} from "./commons";

import './App.css';
class App extends Component {
  componentDidMount() {
    axios.get('/data')
        .then(res => axios.post('/postData', res)
            .then(console.log))
  }

  inputChanged = (param) => {
    console.log(param)
  };

  render() {
    return (
        <BrowserRouter>

            <div>
              <h1>Header</h1>
              <button>LogIn</button>
              <div>
                <Link to={'/'}> Home </Link>
                <Link to={'/profile'}> Profile </Link>
                {/*<Link to={'/checkin'}> Log In </Link>*/}
              </div>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/profile' component={Profile}/>
  {/*              <Route path='/checkin' component={LoginPage}/>*/}
                <Route  path='*' component={Page404}/>
              </Switch>
              <Footer/>
            </div>
        </BrowserRouter>

    );
  }
}

export default App;
