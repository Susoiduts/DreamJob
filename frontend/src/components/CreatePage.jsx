import React from 'react';
import axios from 'axios';
import {useState} from 'react';

export default function CreatePage() {
const [data,setData]=useState({
    company: '',
    jobTitle: '',
    jobDescription: '',
    contact: ''
})

const trackInput = (e) => {
    const newdata= {...data};
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // console.log(newdata);
}

const post = (e) => {
    e.preventDefault();
    // console.log('sent')
    axios
    .post("https://crossover.onrender.com/createjob",{
        company: data.company,
        jobtitle: data.jobTitle,
        jobdescription: data.jobDescription,
        contact: data.contact })
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
}
  return (
    <div className='row'>
    <div className='col-12'>
    <form onSubmit={post} className='d-flex flex-column gap-3' >
        <input type='text' placeholder='Company name' onChange={(e=>trackInput(e))} id='company' value={data.company}  ></input>
        <input type='text' placeholder='Job title' onChange={(e=>trackInput(e))} id='jobTitle' value={data.jobTitle}   ></input>
        <input type='text' placeholder='Job description' onChange={(e=>trackInput(e))} id='jobDescription' value={data.jobDescription}  ></input>
        <input type='text' placeholder='Contact' onChange={(e=>trackInput(e))} id='contact' value={data.contact}  ></input>
        <input type='submit'></input>
    </form>
    </div>
    </div>
  )
}
