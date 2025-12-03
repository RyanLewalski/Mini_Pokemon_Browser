import { useState } from "react";
import styles from "../styles/PokemonCardStyles";
import typeColors from "../styles/typeColors";

function PokemonCard({ data, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        transform: hovered ? "scale(1.05)" : "scale(1)",
        boxShadow: hovered
          ? "0 8px 20px rgba(0,0,0,0.25)"
          : styles.card.boxShadow,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onClick={() => onClick(data.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={data.sprite} alt={data.name} style={styles.image} />
      <h3 style={styles.name}>{data.name}</h3>
      <div style={styles.types}>
        {data.types.map((t) => (
          <span
            key={t}
            style={{
              ...styles.typeBadge,
              backgroundColor: typeColors[t] || "#e6e6e6",
              transform: hovered ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.2s ease",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;

