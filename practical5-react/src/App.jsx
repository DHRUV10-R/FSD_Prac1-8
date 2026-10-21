
import { useState } from "react";
import "./App.css";

function App() {
  const [student, setStudent] = useState("");
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function addTask(e) {
    e.preventDefault();

    if (student.trim() && task.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          student: student.trim(),
          task: task.trim(),
          completed: false,
        },
      ]);
      setTask("");
    }
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  return (
    <div className="container">
      <h1>Student Task Manager</h1>
      <p>Manage your practical tasks using React.js</p>

      <form onSubmit={addTask}>
        <input
          value={student}
          onChange={(e) => setStudent(e.target.value)}
          placeholder="Enter student name"
          required
        />

        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          required
        />

        <button type="submit">Add Task</button>
      </form>

      <h2>Task List ({tasks.length})</h2>

      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((item) => (
          <div className="task" key={item.id}>
            <div>
              <strong>{item.student}</strong>
              <p className={item.completed ? "completed" : ""}>
                {item.task}
              </p>
            </div>

            <button onClick={() => toggleTask(item.id)}>
              {item.completed ? "Undo" : "Complete"}
            </button>

            <button
              className="delete"
              onClick={() => deleteTask(item.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
