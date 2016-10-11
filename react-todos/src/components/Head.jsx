import React from 'react';

export default class Head extends React.Component {
  render() {
    let roundClass = this.props.isAllSelected ? 'round round-selected' : 'round';
    return (
      <div className='head'>
        <i className={roundClass} onClick={this.props.toggleAll}/>
        <input 
          className='head-input'
          type='text' 
          placeholder='请输入新的todo，按Enter确认'
          onKeyDown={this.props.addTodo}
        />
      </div>
    )
  }
}