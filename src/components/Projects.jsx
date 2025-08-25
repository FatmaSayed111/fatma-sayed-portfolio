export default function Projects() {
  return (
    <section id="projects" className="section container">
      <h1 className="heading">Projects</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="font-bold text-lg">Portfolio Website</h2>
          <p className="text-slate-400 mt-2">
            A personal website to showcase my projects and skills using React
            and TailwindCSS.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="font-bold text-lg">Todo List App</h2>
          <p className="text-slate-400 mt-2">
            A simple task management app built with React Hooks.
          </p>
        </div>
      </div>
    </section>
  );
}
