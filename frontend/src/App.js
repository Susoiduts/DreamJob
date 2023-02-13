import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Jobcard from './components/Jobcard';
function App() {
const [jobs,setJobs] = useState([{jobtitle: "job1", company:"company1", jobdescription:"jobdescription1", contact: "contact1"},{jobtitle: "job2", company:"company2", jobdescription:"jobdescription2", contact: "contact2"}])
 
useEffect(()=>{
axios
.get('https://crossover.onrender.com/')
.then(res =>{
  console.log(res.data.jobs)
setJobs(res.data.jobs)})
.catch(err => {console.log(err)})
}
,[])

  return (
    <div className="App container">
    {jobs.map((jobData,i) => {
      return <Jobcard jobData={jobData} key={i}/>
    })}
    </div>
  );
}

export default App;
