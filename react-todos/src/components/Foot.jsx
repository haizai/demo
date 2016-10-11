import React from 'react';

export default class Foot extends React.Component {
  render() {
    const viss = ['全部', '被选中的', '未被选中的'];
    return (
      <div className='foot' style={{display: this.props.footStyle}}>
        <i className='foot-del' onClick={this.props.delSelectedTodos}>&times;</i>
        <span className='foot-info'> <span className='foot-count'>{this.props.selectedCount}</span> 项被选中</span>
        <span className='foot-visibility'>
        {
          viss.map( vis=>{
            let className = vis == this.props.visibility ? 'foot-visibility-in' : null;
            return (
              <span className={className} onClick={this.props.changeVisibility} key={vis}>
                {vis}&nbsp;
              </span>
            );
          })
        }
        </span>
      </div>
    )
  }
}