import { Link } from "react-router-dom";

export default function Navbar({ loggedIn }) {
  return (
      <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center p-4 backdrop-blur bg-slate-950/30">
      <div className="font-extrabold text-lg text-white">
        Fatma<span className="text-emerald-400">.</span>
      </div>

      <ul className="flex gap-4 text-white">
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
        {!loggedIn && (
          <li>
            <Link to="/login">
              <button className="bg-emerald-500 px-3 py-1 rounded">Dashboard</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
