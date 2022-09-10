import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class Newslist extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props
    return (
      <div className="my-3">
      <div className="card">
          <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '0'
          }
          }>

              <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
        
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {description}
          </Card.Text>
          <Card.Footer>
          <small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small>
        </Card.Footer>
          <a href={newsUrl} target="_blank">
          <Button variant="dark">Read More</Button></a>
        </Card.Body>
      
      </div>
      </div>
      
      
    )
  }
}

export default Newslist
