'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <h1>this is the react</h1>
    )
  }
}

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
)

ReactDOM.render(router, document.querySelector('#root'))
