import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Courses from "./components/Courses/Courses";
import Users from "./components/Users/Users";
import Nav from "./components/Nav/Nav";
import NoMatch from "./components/NoMatch/NoMatch";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/courses" component={Courses} />
            <Redirect from="/all-courses" to="/courses" />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
