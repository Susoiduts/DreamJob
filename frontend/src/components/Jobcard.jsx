import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Jobcard({jobData, key}) {

  return (
    <Card bg="light" text="dark" border="secondary" className="p-3 my-3 col-8 offset-2 text-center" style={{opacity: ".9"}} key={key}>
      <Card.Body>
        <Card.Title>{jobData.jobtitle}</Card.Title>
        <Card.Subtitle className="mb-2">at {jobData.company}</Card.Subtitle>
        <Card.Text className="mb-3">
          Description: {jobData.jobdescription}
          <br /><br />
          Contact: {jobData.contact}
        </Card.Text>
        <a href={`mailto:${jobData.contact}`} className="btn btn-success">Apply here</a>
      </Card.Body>
    </Card>
  )
}
