import React from 'react';

export default class Totop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: null
    }
  }
  top() {
    document.documentElement.scrollTop = document.body.scrollTop = 0
  }
  render() {
    var show = e => {
      var top = document.documentElement.scrollTop || document.body.scrollTop
      if (document.documentElement.clientWidth < 950) return
      if (top > 400 && this.state.style === null ) {
        this.setState({style: {
          right: (document.documentElement.clientWidth - 800 - 130) / 2,
          display: 'block'          
        }})
      } 
      if (top <= 400 && this.state.style !== null) {
        this.setState({style: null})        
      }
    }
    window.addEventListener('scroll', show, false)

    return (
      <i className='iconfont totop' style={this.state.style} onClick={this.top}>&#xe602;</i>
    )
  }
}
