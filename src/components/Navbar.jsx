import { Link } from "react-router-dom";

export default function Navbar({ loggedIn, onLogout }) {
  return (
    <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between w-[90%] max-w-6xl p-4 backdrop-blur bg-slate-950/30 rounded-2xl">
      <div className="font-extrabold text-lg text-white">
        Fatma<span className="text-emerald-400">.</span>
      </div>

      <ul className="flex gap-4 text-white items-center">
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>

        <li>
          <Link to={loggedIn ? "/dashboard" : "/login"}>
            <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-xl text-white font-semibold shadow">
              Dashboard
            </button>
          </Link>
        </li>

        {loggedIn && (
          <li>
            <button
              onClick={onLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl text-white font-semibold shadow"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
