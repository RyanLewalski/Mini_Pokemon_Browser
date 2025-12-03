import { useEffect, useState } from "react";
import styles from "../styles/PokemonDetailStyles";

function PokemonDetailModal({ id, onClose }) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:3000/pokemon/${id}`);
        const data = await res.json();
        setPokemon(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  if (!id) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2 style={styles.title}>{pokemon.name}</h2>
            <img src={pokemon.sprite} alt={pokemon.name} style={styles.image} />
            <p><strong>Types:</strong> {pokemon.types.join(", ")}</p>
            <p><strong>Height:</strong> {pokemon.height}</p>
            <p><strong>Weight:</strong> {pokemon.weight}</p>
            <p><strong>Abilities:</strong> {pokemon.abilities.join(", ")}</p>
            <div>
              <strong>Stats:</strong>
              <ul>
                {pokemon.stats.map((s) => (
                  <li key={s.name}>
                    {s.name}: {s.value}
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={onClose} style={styles.closeButton}>Close</button>
          </>
        )}
      </div>
    </div>
  );
}


export default PokemonDetailModal;
