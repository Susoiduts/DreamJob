const Job = require("../models/Job");

const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json({ jobs });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const createJob = async (req, res) => {
    const { jobtitle, company, jobdescription, contact } = req.body;
    try{
        const newJob = await Job.create({
            jobtitle,
            company,
            jobdescription,
            contact,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
    res.send("job created")
};

const deleteJob = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Job.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).send("Job deleted");
        }
        throw new Error("Job not found");
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const updateJob = async (req, res) => {
    const { id } = req.params;
    const { jobtitle, company, jobdescription, contact } = req.body;
    try {
        const updateJob = await Job.findByIdAndUpdate(
            id,
            { jobtitle, company, jobdescription, contact },
            { new: true }
        );
        res.status(200).json(updateJob);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = {
    getAllJobs,
    createJob,
    deleteJob,
    updateJob,
};
