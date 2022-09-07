import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export class Newslist extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props
    return (
        <div className='my-3'>
        <Card style={{ width: '18rem' }}>
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
      </Card>
      </div>
    )
  }
}

export default Newslist
