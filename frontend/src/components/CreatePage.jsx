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
    <div className='container'>
    <div className='col-6 offset-3 mt-4 text-center '>
        <h4 className='mb-5'>Here you can post a new job</h4>
    <form onSubmit={post} className='d-flex flex-column gap-2 '  >
        <label>Company name</label>
        <input type='text'  onChange={(e=>trackInput(e))} id='company' value={data.company} required  ></input>
        <label>Job title</label>
        <input type='text' onChange={(e=>trackInput(e))} id='jobTitle' value={data.jobTitle}  required ></input>
        <label>Job description</label>
        <input type='text' onChange={(e=>trackInput(e))} id='jobDescription' value={data.jobDescription}  required ></input>
        <label>Contact</label>
        <input type='text' onChange={(e=>trackInput(e))} id='contact' value={data.contact} required ></input>
        <input type='submit' className='btn btn-success mt-3'></input>
    </form>
    </div>
    </div>
  )
}
