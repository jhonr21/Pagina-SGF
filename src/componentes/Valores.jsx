import React from 'react'
import {Card} from "react-bootstrap"


const Valores = () => {
  return (
    <div className=' '>
        <h1 className='Titulo'>Valores</h1>
        <div className='d-flex Valores'>
  <Card border="primary" style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Title>Vision</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card border="secondary" style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Title>Mision</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card border="success" style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Title>Objetivos</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

</div>
    </div>
  )
}

export default Valores