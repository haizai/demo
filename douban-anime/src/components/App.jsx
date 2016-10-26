import React from 'react';
import Header from './Header.jsx'
import Totop from './Totop.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Totop/>
        {this.props.children}
      </div>
    )
  }
}
