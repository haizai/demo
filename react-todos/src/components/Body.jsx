import React from 'react';

import Todo from './Todo.jsx'

export default class Body extends React.Component {
  render() {
    return (
      <div className='body'>
      {
        this.props.todos.map((todo, index)=>{
          return (
            <Todo
              index={index}
              text={todo.text} 
              selected={todo.selected}
              key={index + '.' + new Date()}
              delTodo={this.props.delTodo}
              toggle={this.props.toggle}
              tryEdit={this.props.tryEdit}
              submitEdit={this.props.submitEdit}
            />   
          )
        })
      }
      </div>
    )
  }
}