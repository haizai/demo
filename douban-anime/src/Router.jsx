import React from 'react';

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Anime from './components/Anime.jsx';
import App from './components/App.jsx';


export default class Root extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' components={App}>
          <Route path='/anime/:id' components={Anime}/>
        </Route>
      </Router>
    )
  }
}
