import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Home.css"

function HomePage() {
  return (
    <div className='carouselStyle'>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.freewebheaders.com/wp-content/gallery/wildlife/elephants-in-the-distance-sunset-landscape-website-header.jpg"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thumbs.dreamstime.com/b/wild-zoo-animals-white-web-banner-large-group-together-horizontal-room-text-space-148466781.jpg"
            alt="Second slide"
          />


        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.freewebheaders.com/wp-content/gallery/wildlife/dangerous-wild-tigers-website-header.jpg"
            alt="Third slide"
          />


        </Carousel.Item>
      </Carousel>
      <div className='helements'>

        <Card className='card1' style={{ width: '18rem' }}>
          <Card.Img className='cardImg' variant="top" src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />
          <Card.Body>
            <Card.Title>Bhedia</Card.Title>
            <Card.Text>
            <h5>Price:-</h5> Rs.500
            </Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>

        <Card className='card1' style={{ width: '18rem' }}>
          <Card.Img className='cardImg' variant="top" src="https://images.unsplash.com/photo-1503656142023-618e7d1f435a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&q=80" />
          <Card.Body>
            <Card.Title>Zebra</Card.Title>
            <Card.Text>
            <h5>Price:-</h5> Rs.350
            </Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>

        <Card className='card1' style={{ width: '18rem' }}>
          <Card.Img className='cardImg' variant="top" src="https://images.unsplash.com/photo-1516934024742-b461fba47600?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          <Card.Body>
            <Card.Title>Lomdi</Card.Title>
            <Card.Text>
              <h5>Price:-</h5> Rs.150
              
            </Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>
      </div>
      <div className='helements'>

        <Card className='card1' style={{ width: '18rem' }}>
          <Card.Img className='cardImg' variant="top" src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />
          <Card.Body>
            <Card.Title>Bhedia</Card.Title>
            <Card.Text>
            <h5>Price:-</h5> Rs.500
            </Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>

        <Card className='card1' style={{ width: '18rem' }}>
          <Card.Img className='cardImg' variant="top" src="https://images.unsplash.com/photo-1503656142023-618e7d1f435a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&q=80" />
          <Card.Body>
            <Card.Title>Zebra</Card.Title>
            <Card.Text>
            <h5>Price:-</h5> Rs.350
            </Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>

        <Card className='card1' style={{ width: '18rem' }}>
          <Card.Img className='cardImg' variant="top" src="https://images.unsplash.com/photo-1516934024742-b461fba47600?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          <Card.Body>
            <Card.Title>Lomdi</Card.Title>
            <Card.Text>
              <h5>Price:-</h5> Rs.150
              
            </Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default HomePage;