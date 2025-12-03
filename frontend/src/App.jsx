import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error fetching from backend"));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Pokémon Mini Browser</h1>
      <p>Backend test: {message}</p>
    </div>
  );
}

export default App;

