import React from 'react';

import reqwest from 'reqwest'

export default class Anime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    }
    this.sendAjax(this.props.routeParams.id)
  }
  componentDidUpdate(prevPorps) {
    if (this.props.routeParams.id !== prevPorps.routeParams.id) {
      this.setState({ready: false})
      this.sendAjax(this.props.routeParams.id)
    }
  }
  sendAjax(id) {
    reqwest({
      url: './data/id/' + id + '.json',
      method: 'get',
      type: 'json',
      success: data => {
        this.setState({anime: data})
        this.setState({ready: true})
        this.setState({error: false})
      },
      error: () => {
        console.error('anime id: ',this.props.routeParams.id,'is not found');
        this.setState({error: true})
      }
    })
  }
  render() {
    if (this.state.ready) {    
      let anime = this.state.anime
      let imgSrc = 'images/id/' + this.state.anime.id + '.jpg'

      var info = Object.keys(anime.info).map((key,index) => {
        return (
          <p key={index}><b>{key}</b>: {anime.info[key]}</p>
        )
      })

      let ratingWidths = [ 
        Math.floor(parseFloat(anime.rating['5星'])),
        Math.floor(parseFloat(anime.rating['4星'])),
        Math.floor(parseFloat(anime.rating['3星'])),
        Math.floor(parseFloat(anime.rating['2星'])),
        Math.floor(parseFloat(anime.rating['1星']))]
      let ratingDivStyles = ratingWidths.map((item, index)=> { 
        var max = Math.max.apply(null, ratingWidths)
        var i = ratingWidths.indexOf(max)
        var width = item/max*250 + 1
        return index == i ? {width, background: '#c05b4d'} : {width, background: '#ccc'} ;
      })

      return (
        <div>
        <div className='container'>
          <h2 className='anime-title'>{anime.title}</h2>
          <p className='anime-jpTitle'>{anime.allTitle}</p>
            <div className='anime-img'>
              <img src={imgSrc}></img>
            </div>
            {info}
            <div className='anime-rating-left'>
              <p className='anime-rating-point'>{anime.rating['分数']}</p>
              <p>{anime.rating['人数']}人评价</p>
            </div>
            <div className='anime-rating-right'>
              <div>5星 <div className='anime-rating-div' style={ratingDivStyles[0]}></div>{anime.rating['5星']}</div>
              <div>4星 <div className='anime-rating-div' style={ratingDivStyles[1]}></div>{anime.rating['4星']}</div>
              <div>3星 <div className='anime-rating-div' style={ratingDivStyles[2]}></div>{anime.rating['3星']}</div>
              <div>2星 <div className='anime-rating-div' style={ratingDivStyles[3]}></div>{anime.rating['2星']}</div>
              <div>1星 <div className='anime-rating-div' style={ratingDivStyles[4]}></div>{anime.rating['1星']}</div>
            </div>
            <div style={{clear: 'both'}}></div>

            {
              anime.summary? 
              <div>
                <p className='anime-listTitle'>动画简介</p>
                <p>{anime.summary.replace('©豆瓣','')}</p>
              </div>:''
            }

            <p className='anime-listTitle'>短评</p>
            {anime.comments.map( (comment, index)=> {
              return <p key={index}> · {comment}</p>
            })}
            <p className='anime-listTitle'>长评</p>
            {
              anime.reviews.map( (review, index)=> {
                return (
                  <div key={index}>
                    <p className='anime-review-title'>{review.title}</p>
                    {
                      review.html.map((p,i) => {
                        return (
                          <p key={i}>{p}</p>
                        )
                      })
                    }
                    <br/>
                    <hr/>
                  </div>
                )
              })
            }            

        </div>
        </div>
      )

    }
    if (this.state.error) {
      return (
        <div>
          404 not found
        </div>
      )
    }

    return (
      <div>
          <div className='loading-icon'>
            <i className="iconfont">&#xe600;</i>
            <p>Loading...</p>
          </div>
        <div className='loading-div'></div>
      </div>
    )
  }
}
