const express = require("express")

const { 
    getAllJobs,
    createJob,
    deleteJob,
    updateJob 
} = require("../controllers/jobs.js")

const jobsRouter = express.Router();

// get all the jobs
jobsRouter.get("/", getAllJobs);
// create a job
jobsRouter.post("/createjob", createJob);
// delete a job
jobsRouter.delete("/delete/:id", deleteJob)
//update a job
jobsRouter.put("/update/:id", updateJob)

module.exports = { jobsRouter };