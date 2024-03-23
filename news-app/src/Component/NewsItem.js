import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
   let {title, description, imageURL, newsURL} = this.props// in class component propes are define bu=y this keywords
    return (
        <>
        <div className="card" style={{width: "18rem"}}>
  <img src={imageURL} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text"> {description}</p>
     <a href={newsURL} target='_blank' className="btn btn-sm btn-primary btn-dark">Read More</a> {/* // if we do target="blank then its open on a new page"  */}
  </div>
</div>
</>
    )
  }
}

export default NewsItem