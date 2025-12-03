import { useEffect, useState } from "react";
import styles from "../styles/PokemonDetailStyles";
import typeColors from "../styles/typeColors";

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

            <div style={styles.typesContainer}>
              {pokemon.types.map((t) => (
                <span
                  key={t}
                  style={{
                    ...styles.typeBadge,
                    background: typeColors[t] || "#e6e6e6",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <p style={styles.description}>{pokemon.description}</p>

            <div style={styles.section}>
              <p style={styles.label}>Height: {pokemon.height}</p>
              <p style={styles.label}>Weight: {pokemon.weight}</p>
              <p style={styles.label}>
                Abilities: {pokemon.abilities.join(", ")}
              </p>
            </div>

            <div style={styles.section}>
              <p style={styles.label}>Stats:</p>
              <ul style={styles.statsList}>
                {pokemon.stats.map((s) => (
                  <li key={s.name} style={styles.statItem}>
                    <span>{s.name}</span>
                    <span>{s.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button style={styles.closeButton} onClick={onClose}>
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default PokemonDetailModal;
