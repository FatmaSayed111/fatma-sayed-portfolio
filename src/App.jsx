import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsDashboard from "./pages/ProjectsDashboard";
import Login from "./pages/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => setLoggedIn(true);

  const handleLogout = () => {
    setLoggedIn(false);
    navigate("/"); // يوديك للصفحة الرئيسية بعد الـ Logout
  };

  return (
    <>
      <Navbar loggedIn={loggedIn} onLogout={handleLogout} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/login"
          element={loggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
        />

        <Route
          path="/dashboard"
          element={loggedIn ? <ProjectsDashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
