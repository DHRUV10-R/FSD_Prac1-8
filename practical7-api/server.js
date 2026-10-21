
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let students = [
  { id: 1, name: "Dhruv", course: "MSc Computer Science" }
];

let nextId = 2;

// Home route
app.get("/", (req, res) => {
  res.send("Student Management REST API is running");
});

// CREATE - Add a student
app.post("/students", (req, res) => {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({
      message: "Name and course are required"
    });
  }

  const student = {
    id: nextId++,
    name,
    course
  };

  students.push(student);
  res.status(201).json(student);
});

// READ - Get all students
app.get("/students", (req, res) => {
  res.status(200).json(students);
});

// READ - Get a student by ID
app.get("/students/:id", (req, res) => {
  const student = students.find(
    (s) => s.id === Number(req.params.id)
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.json(student);
});

// UPDATE - Update a student
app.put("/students/:id", (req, res) => {
  const student = students.find(
    (s) => s.id === Number(req.params.id)
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({
      message: "Name and course are required"
    });
  }

  student.name = name;
  student.course = course;

  res.json(student);
});

// DELETE - Remove a student
app.delete("/students/:id", (req, res) => {
  const index = students.findIndex(
    (s) => s.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  const deletedStudent = students.splice(index, 1)[0];

  res.json({
    message: "Student deleted successfully",
    student: deletedStudent
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
