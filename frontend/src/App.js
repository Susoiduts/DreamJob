import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Jobcard from './components/Jobcard';
function App() {
const [jobs,setJobs] = useState([])
 
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
    
    <div className="App container py-3" >
    {jobs.map((jobData,i) => {
      return <Jobcard jobData={jobData} key={i}/>
    })}
    </div>
    
  );
}

export default App;
