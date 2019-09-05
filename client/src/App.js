import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Page404 from "./components/Page404";

import './App.css';

class App extends Component {
  componentDidMount() {
    axios.get('/data')
        .then(res => axios.post('/postData', res)
            .then(console.log))
  }

  inputChanged = (param) => {
    console.log(param)
  }

  render() {
    return (
        <BrowserRouter>

            <div>
              Header
              <div>
                <Link to={'/'}> Home </Link>
                <Link to={'/profile'}> Profile </Link>
              </div>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/profile' component={Profile}/>
                <Route  path='*' component={Page404}/>
              </Switch>
            </div>
        </BrowserRouter>

    );
  }
}

export default App;
