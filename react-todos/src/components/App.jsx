import React from 'react';

import Title from './Title.jsx';
import Head from './Head.jsx';
import Body from './Body.jsx';
import Foot from './Foot.jsx';

const NAME = 'react-todos-Haizai';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem(NAME)) || {
      todos: [{text: "默认todo1", selected: false}, {text: "默认todo2", selected: true}],
      visibility: '全部'
    };
    //以下绑定在Head上
    this.addTodo          = this.addTodo.bind(this);
    this.toggleAll        = this.toggleAll.bind(this);
    //以下绑定在Todo上
    this.delTodo          = this.delTodo.bind(this);
    this.toggle           = this.toggle.bind(this);
    this.tryEdit          = this.tryEdit.bind(this);
    this.submitEdit       = this.submitEdit.bind(this);
    //以下绑定在Foot上
    this.delSelectedTodos = this.delSelectedTodos.bind(this);
    this.changeVisibility = this.changeVisibility.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    window.localStorage.setItem(NAME, JSON.stringify(prevState));
  }
  addTodo(e) {
    if (e.keyCode === 13 && e.target.value.trim() !== '') {
      this.state.todos.push({
        text: e.target.value,
        selected: false
      });
      e.target.value = '';
      this.forceUpdate();
    };
  }
  toggleAll() {
    this.state.todos.every( todo => todo.selected )
      ? this.state.todos.forEach( todo => todo.selected = false )
      : this.state.todos.forEach( todo => todo.selected = true );
    this.forceUpdate();
  }
  delTodo(index) {
    this.state.todos.splice(index, 1);
    this.forceUpdate();
  }
  toggle(index) {
    this.state.todos[index].selected = !this.state.todos[index].selected;
    this.forceUpdate();
  }
  tryEdit(e) {
    let input = e.target.nextSibling;
    input.value = e.target.innerHTML;
    input.style.display = 'inline-block';
    input.select();
    input.focus();
  }
  submitEdit(e, index) {
    if (e.type == 'keydown') {
      if (e.keyCode === 13) e.target.blur();
      return;
    };
    if (e.target.value.trim()) {
      this.state.todos[index].text = e.target.value;
      e.target.style.display = 'none';
    } else {
      this.state.todos.splice(index, 1);
    };
    this.forceUpdate();
  }
  delSelectedTodos() {
    this.setState({todos: this.state.todos.filter( todo => !todo.selected )});
  }
  changeVisibility(e) {
    this.setState({visibility: e.target.textContent.trim()});
  }
  render() {
    let isAllSelected = ( this.state.todos.length && this.state.todos.every( todo => todo.selected ) ) ? true : false,
      selectedCount   = this.state.todos.filter( todo => todo.selected ).length,
      footStyle       = this.state.todos.length === 0 ? 'none' : 'block',
      visibilityTodos = this.state.todos.filter( todo => {
        switch (this.state.visibility) {
          case '全部'       : return true;
          case '被选中的'   : return todo.selected;
          case '未被选中的' : return !todo.selected;
        };
      });
    return (
      <div className='container'>
        <Title />
        <Head 
          isAllSelected={isAllSelected}
          addTodo={this.addTodo}
          toggleAll={this.toggleAll}
        />      
        <Body
          todos={visibilityTodos}
          delTodo={this.delTodo}
          toggle={this.toggle}
          tryEdit={this.tryEdit}
          submitEdit={this.submitEdit}
        />
        <Foot
          footStyle={footStyle}
          selectedCount={selectedCount}
          visibility={this.state.visibility}
          delSelectedTodos={this.delSelectedTodos}
          changeVisibility={this.changeVisibility}
        />
      </div>
    );
  }
};
