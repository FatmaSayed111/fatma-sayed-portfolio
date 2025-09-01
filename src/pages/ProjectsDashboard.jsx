import { useState } from "react";
import "./projectsdashborad.css";

export default function Dashboard() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Project 1", description: "Description 1" },
    { id: 2, name: "Project 2", description: "Description 2" },
  ]);

  const [newProject, setNewProject] = useState({ name: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (newProject.name && newProject.description) {
      const id = projects.length + 1;
      setProjects([...projects, { id, ...newProject }]);
      setNewProject({ name: "", description: "" });
    }
  };

  const handleDelete = (id) => setProjects(projects.filter(p => p.id !== id));

  return (
    <div className="dashboard-container">
      <h1>Projects Dashboard</h1>

      <form className="dashboard-form" onSubmit={handleAddProject}>
        <input type="text" name="name" placeholder="Project Name" value={newProject.name} onChange={handleChange} />
        <textarea name="description" placeholder="Project Description" value={newProject.description} onChange={handleChange} />
        <button type="submit">Add Project</button>
      </form>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(project.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
