import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition ${
        scrolled
          ? "backdrop-blur bg-slate-950/70 border-b border-white/10"
          : ""
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        <a href="#" className="font-extrabold text-lg">
          Fatma<span className="text-emerald-400">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><a href="#about" className="hover:text-emerald-400">About</a></li>
          <li><a href="#skills" className="hover:text-emerald-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-emerald-400">Projects</a></li>
          <li><a href="#products" className="hover:text-emerald-400">Products</a></li>
          <li><a href="#experience" className="hover:text-emerald-400">Experience</a></li>
          <li><a href="#contact" className="hover:text-emerald-400">Contact</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="btn btn-ghost p-2" aria-label="Github"><Github size={18}/></a>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer" className="btn btn-ghost p-2" aria-label="LinkedIn"><Linkedin size={18}/></a>
          <a href="mailto:you@example.com" className="btn btn-primary text-sm">Email me</a>
        </div>
      </nav>
    </header>
  );
}
