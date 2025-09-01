import { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "Fatma" && password === "0987") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80 flex flex-col gap-3">
        <h2 className="text-xl font-bold text-center">Login</h2>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="border p-2 rounded text-black" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 rounded text-black" />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="bg-emerald-500 text-white p-2 rounded hover:bg-emerald-600">Login</button>
      </form>
    </div>
  );
}
