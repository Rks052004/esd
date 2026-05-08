// Import Express
const express = require("express");

const app = express();

// Middleware for JSON Data
app.use(express.json());

// Sample Data
let students = [
    { id: 1, name: "Rishit" },
    { id: 2, name: "Amey" }
];

// GET API
app.get("/students", (req, res) => {

    res.json(students);
});

// POST API
app.post("/students", (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name
    };

    students.push(newStudent);

    res.json({
        message: "Student Added Successfully",
        data: newStudent
    });
});

// PUT API
app.put("/students/:id", (req, res) => {

    const id = req.params.id;

    students[id - 1].name = req.body.name;

    res.json({
        message: "Student Updated Successfully",
        data: students[id - 1]
    });
});

// DELETE API
app.delete("/students/:id", (req, res) => {

    const id = req.params.id;

    students = students.filter(student => student.id != id);

    res.json({
        message: "Student Deleted Successfully"
    });
});

// Start Server
app.listen(3000, () => {

    console.log("Server running at http://localhost:3000");
});