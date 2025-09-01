import { useState } from "react";

export default function ProjectsDashboard() {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // إضافة أو تحديث مشروع
  const handleAddOrUpdateProject = (e) => {
    e.preventDefault();

    if (projectName && projectDescription) {
      if (editIndex !== null) {
        // تحديث
        const updatedProjects = [...projects];
        updatedProjects[editIndex] = {
          name: projectName,
          description: projectDescription,
        };
        setProjects(updatedProjects);
        setEditIndex(null);
      } else {
        // إضافة
        setProjects([
          ...projects,
          { name: projectName, description: projectDescription },
        ]);
      }
      setProjectName("");
      setProjectDescription("");
    }
  };

  // مسح مشروع + رسالة تأكيد
  const handleDeleteProject = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (confirmDelete) {
      const updatedProjects = projects.filter((_, i) => i !== index);
      setProjects(updatedProjects);
    }
  };

  // تعديل مشروع
  const handleEditProject = (index) => {
    setProjectName(projects[index].name);
    setProjectDescription(projects[index].description);
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Project Form */}
      <form
        onSubmit={handleAddOrUpdateProject}
        className="bg-slate-800 p-6 rounded-2xl shadow-lg mb-8 w-[90%] max-w-2xl"
      >
        <h2 className="text-xl font-semibold mb-4">
          {editIndex !== null ? "Update Project" : "Add New Project"}
        </h2>

        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Project Name"
          className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <textarea
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          placeholder="Project Description"
          className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-semibold shadow-md"
        >
          {editIndex !== null ? "Update Project" : "Add Project"}
        </button>
      </form>

      {/* Projects List */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 p-4 rounded-xl shadow-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold mb-2">{project.name}</h3>
              <p className="text-slate-300">{project.description}</p>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleEditProject(index)}
                className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg text-sm font-semibold"
              >
                Update
              </button>
              <button
                onClick={() => handleDeleteProject(index)}
                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
