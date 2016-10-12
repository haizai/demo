import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Todo from './Todo.jsx'

export default class Body extends React.Component {
  render() {
    return (
      <div className='body'>
      <ReactCSSTransitionGroup 
        transitionName="fade"
        transitionEnterTimeout={300} 
        transitionLeaveTimeout={300}>      
      {
        this.props.todos.map((todo, index)=>{
          return (

              <Todo
                index={index}
                text={todo.text} 
                selected={todo.selected}
                key={todo.key}
                delTodo={this.props.delTodo}
                toggle={this.props.toggle}
                tryEdit={this.props.tryEdit}
                submitEdit={this.props.submitEdit}
              />   

          )
        })
      }
      </ReactCSSTransitionGroup>
      </div>
    )
  }
}