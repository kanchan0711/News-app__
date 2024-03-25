import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
   let {title, description, imageURL, newsURL, author, date, source} = this.props// in class component propes are define bu=y this keywords
    return (
        <>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex: "1"}}>
     {source}
  </span>
  <img src={imageURL} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
  
    <p className="card-text"> {description}</p>
    <p className="card-text"><small className='_blank'>By {author?author:"Unknown author"} on {new Date(date).toGMTString()}</small></p>
     <a href={newsURL} target='_blank' className="btn btn-sm btn-primary btn-dark">Read More</a> {/* // if we do target="blank then its open on a new page"  */}
  </div>
</div>
</>
    )
  }
}

export default NewsItem