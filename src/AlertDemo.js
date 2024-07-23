
import React from 'react'
import { Card, Container,Alert } from 'react-bootstrap'

function AlertDemo() {


  return (
    <div>
     <Container>
     <Card>
     <Alert variant ='warning'>
           Warning This is Alert....!!!
     </Alert>
     <Alert variant ='primary'>
         primary This is Alert....!!!
     </Alert>
     <Alert variant ='success'>
     success This is Alert....!!!
     </Alert>
     <Alert variant ='info'>
     info This is Alert....!!!
     </Alert>
     <Alert variant ='danger'>
     danger This is Alert....!!!
     </Alert>
      
     </Card>
     </Container> 
    </div>
  );
}

export default AlertDemo
