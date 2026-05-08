// Import Modules
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((err) => {
    console.log(err);
});

// Create Schema
const studentSchema = new mongoose.Schema({

    name: String,
    course: String
});

// Create Model
const Student = mongoose.model("Student", studentSchema);

// Home Route
app.get("/", async (req, res) => {

    // Insert Sample Data
    const newStudent = new Student({

        name: "Rishit",
        course: "CSE"
    });

    await newStudent.save();

    res.send("Data Inserted into MongoDB");
});

// Start Server
app.listen(3000, () => {

    console.log("Server running at http://localhost:3000");
});