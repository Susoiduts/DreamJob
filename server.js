require("dotenv").config();
const express = require("express")
const app = express()
const db = require("./db.js")
const { jobsRouter } = require("./routes/jobs.js")
const cors = require("cors")

const port = process.env.PORT || 5000;

db();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", jobsRouter)

app.listen(port, (req, res) => {
    console.log(`Server is running on http://localhost:${port}`)
})

app.get("/", (req, res) => {
    res.send("Hello this is a Test!");
});
