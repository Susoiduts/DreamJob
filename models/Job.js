const mongoose = require("mongoose");

const { Schema } = mongoose;

const JobSchema = new Schema({
    jobtitle: { 
        type: String, required: true,
        maxLength: [50, "Job title cannot be more than 50 characters"],
    },
    company: {
        type: String, required: true,
        maxLength: [50, "Company name cannot be more than 50 characters"],
    },
    jobdescription: {
        type: String, required: true,
    },
    contact: {
        type: String, required: true,
        maxLength: [30, "Contact name cannot be more than 30 characters"],
    },
}); 

    module.exports = mongoose.model("Job", JobSchema);



