import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Jobcard({jobData}) {

  return (
    <div className='col-8  text-center'>
    <Card bg="secondary" text="light" border="light"  key="key1">
      <Card.Body>
        <Card.Title>Title:{jobData.jobtitle}</Card.Title>
        <Card.Subtitle className="mb-2">Company:{jobData.company}</Card.Subtitle>
        <Card.Text>
          Description:{jobData.jobdescription}
          <br></br>
          Contact:{jobData.contact}
        </Card.Text>
        <Button variant="success">Apply here</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
