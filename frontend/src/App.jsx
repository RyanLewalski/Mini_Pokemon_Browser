import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import PokemonDetailModal from "./components/PokemonDetailModal";
import styles from "./styles/AppStyles";


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [typeFilter, setTypeFilter] = useState("");
  const [types, setTypes] = useState([]);
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);
  
   const handleCardClick = (id) => {
    setSelectedPokemonId(id);
  };

  const handleCloseModal = () => {
    setSelectedPokemonId(null);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);


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
  }, [debouncedSearch, typeFilter]);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const res = await fetch("http://localhost:3000/pokemon/types");
        const data = await res.json();
        setTypes(data.types);
      } catch (err) {
        console.error("Failed to load types:", err);
      }
    };

    fetchTypes();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Pokémon Mini Browser</h1>

      <div style={styles.controls}>
        {/* Controls Row */}
        <input
          type="text"
          placeholder="Search Pokémon..."
          style={styles.search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          style={styles.select}
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
           <option value="">All Types</option>

          {types.map((t) => (
            <option key={t} value={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Loading */}
      {loading && <p style={styles.status}>Loading...</p>}

      {/* Error */}
      {error && <p style={styles.statusError}>{error}</p>}

      {/* Grid */}
      <div style={styles.grid}>
        {!loading &&
          !error &&
          pokemon.map((p) => <PokemonCard key={p.id} data={p} onClick={handleCardClick} />)}
      </div>

      {/* Detail modal */}
      {selectedPokemonId && (
        <PokemonDetailModal
          id={selectedPokemonId}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
