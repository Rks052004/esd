// Import Modules
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

// Schema
const studentSchema = new mongoose.Schema({

    name: String,
    course: String
});

// Model
const Student = mongoose.model("Student", studentSchema);

//
// CREATE Operation
//
app.get("/create", async (req, res) => {

    const student = new Student({

        name: "Rishit",
        course: "CSE"
    });

    await student.save();

    res.send("Student Added Successfully");
});

//
// READ Operation
//
app.get("/read", async (req, res) => {

    const students = await Student.find();

    res.json(students);
});

//
// UPDATE Operation
//
app.get("/update", async (req, res) => {

    await Student.updateOne(
        { name: "Rishit" },
        { $set: { course: "IT" } }
    );

    res.send("Student Updated Successfully");
});

//
// DELETE Operation
//
app.get("/delete", async (req, res) => {

    await Student.deleteOne({ name: "Rishit" });

    res.send("Student Deleted Successfully");
});

// Home Route
app.get("/", (req, res) => {

    res.send(`
        <h1>MongoDB CRUD Operations</h1>

        <a href="/create">CREATE</a><br><br>

        <a href="/read">READ</a><br><br>

        <a href="/update">UPDATE</a><br><br>

        <a href="/delete">DELETE</a>
    `);
});

// Start Server
app.listen(3000, () => {

    console.log("Server running at http://localhost:3000");
});