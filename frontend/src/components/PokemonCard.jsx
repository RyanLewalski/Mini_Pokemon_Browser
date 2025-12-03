import styles from "../styles/PokemonCardStyles";

function PokemonCard({ data, onClick }) {
  return (
    <div
      style={styles.card}
      onClick={() => onClick(data.id)}
    >
      <img src={data.sprite} alt={data.name} style={styles.image} />
      <h3 style={styles.name}>{data.name}</h3>
      <div style={styles.types}>
        {data.types.map((t) => (
          <span key={t} style={styles.typeBadge}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
