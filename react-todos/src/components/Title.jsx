import React from 'react';

export default class Title extends React.Component {
  render() {
    return (
      <div className='title'>
        <p>React Todos</p>
        <p className="author"><a href="https://github.com/haizai" target="_black">Created by Haizai</a></p>
      </div>
    )
  }
}