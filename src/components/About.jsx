export default function About() {
  return (
    <section id="about" className="section container grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Left Side - Info Box */}
      <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold text-emerald-400 mb-4">Quick Info</h2>
        <ul className="space-y-3 text-slate-300">
          <li>
            <span className="font-bold text-emerald-400 mr-2">•</span>
            Studying at Al-Azhar University (since 2022)
          </li>
          <li>
            <span className="font-bold text-emerald-400 mr-2">•</span>
            Learning Programming through online courses (since 2022)
          </li>
          <li>
            <span className="font-bold text-emerald-400 mr-2">•</span>
            Passionate about Front-End Development (React, JavaScript)
          </li>
          <li>
            <span className="font-bold text-emerald-400 mr-2">•</span>
            Based in Obour City, Egypt
          </li>
        </ul>
      </div>

      {/* Right Side - About Text */}
      <div>
        <h1 className="heading">About Me</h1>
        <p className="mt-4 text-slate-400 leading-relaxed">
          I'm a Front-End developer passionate about creating clean, modern, and user-friendly web applications. 
          My background in problem solving and continuous learning helps me improve my skills every day. 
          I'm eager to contribute to real-world projects and grow within the tech industry.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-md transition">
            Download CV
          </button>
          <button className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-md transition">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}
