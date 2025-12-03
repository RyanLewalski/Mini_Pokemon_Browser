const PokemonCardStyles = {
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "1rem",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
  },
  image: {
    width: "120px",
    height: "120px",
    objectFit: "contain",
    margin: "0 auto",
  },
  name: {
    textTransform: "capitalize",
    marginTop: "0.75rem",
    marginBottom: "0.5rem",
  },
  types: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    flexWrap: "wrap",
  },
  typeBadge: {
    background: "#e6e6e6",
    borderRadius: "8px",
    padding: "0.25rem 0.5rem",
    fontSize: "0.8rem",
    textTransform: "capitalize",
  },
};

PokemonCardStyles.card = {
  ...PokemonCardStyles.card,
  ":hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
};

export default PokemonCardStyles;

