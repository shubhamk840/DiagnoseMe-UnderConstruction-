import React from 'react'
import {Form,Button} from 'react-bootstrap';
import './Form.css'
function form() {





    
    return (
        
     <div>
<Form className="apna_form">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Element Id</Form.Label>
    <Form.Control type="text" placeholder="Enter Id" />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>value</Form.Label>
    <Form.Control type="text" placeholder="Enter value" />
  </Form.Group>

  
  <Button variant="primary" type="submit">
    check
  </Button>

</Form>
     </div>
        
    )
}

export default form