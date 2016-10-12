import React from 'react';

export default class Todo extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      delShow: 'none'
    };
    this.todoDelShow = this.todoDelShow.bind(this);
    this.todoDelHide = this.todoDelHide.bind(this);
  } 
  todoDelShow() {
    this.setState({delShow: 'block'});
  }
  todoDelHide() {
    this.setState({delShow: 'none'}); 
  }
  render() {
    let roundClass = this.props.selected ? 'round round-selected' : 'round',
        labelClass = this.props.selected ? 'body-label body-label-selected' : 'body-label',
        index      = this.props.index;
    return (
      <div 
        className='body-item' 
        onMouseEnter={this.todoDelShow}
        onMouseMove={this.todoDelShow}
        onMouseLeave={this.todoDelHide}>
        <i 
          className={roundClass}
          onClick={()=>this.props.toggle(index)}
        />
        <div 
          className={labelClass}
          onClick={this.props.tryEdit}
        >{this.props.text}</div>
        <input 
          type='text' 
          className='body-input' 
          style={{display: 'none'}} 
          onKeyDown={e=>this.props.submitEdit(e, index)}
          onBlur={e=>this.props.submitEdit(e, index)}
        />
        <i 
          className='body-del' 
          style={{display: this.state.delShow}}
          onClick={()=>this.props.delTodo(index)}
        >&times;</i>
      </div>
    )
  }
};