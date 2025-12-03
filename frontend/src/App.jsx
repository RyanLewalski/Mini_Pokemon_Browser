import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:3000/pokemon/list?search=${search}&type=${typeFilter}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch Pokémon list");
        }

        const data = await res.json();
        setPokemon(data.results);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Could not load Pokémon.");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [search]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Pokémon Mini Browser</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search Pokémon..."
        style={styles.search}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Type Filter */}
      <select
        style={styles.select}
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
      >
        <option value="">All Types</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="ground">Ground</option>
        <option value="flying">Flying</option>
        <option value="poison">Poison</option>
        <option value="bug">Bug</option>
        <option value="psychic">Psychic</option>
        <option value="normal">Normal</option>
        <option value="fairy">Fairy</option>
        <option value="fighting">Fighting</option>
        <option value="rock">Rock</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="ghost">Ghost</option>
        <option value="steel">Steel</option>
        <option value="dark">Dark</option>
      </select>

      {/* Loading */}
      {loading && <p style={styles.status}>Loading...</p>}

      {/* Error */}
      {error && <p style={styles.statusError}>{error}</p>}

      {/* Grid */}
      <div style={styles.grid}>
        {!loading &&
          !error &&
          pokemon.map((p) => <PokemonCard key={p.id} data={p} />)}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
  controls: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1.5rem",
  },
  search: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    marginBottom: "1.5rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  select: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    background: "white",
  },
  status: {
    textAlign: "center",
    fontSize: "1.2rem",
  },
  statusError: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "red",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "1.5rem",
  },
};

export default App;
