const PokemonCardStyles = {
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "1rem",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.2s ease",
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

export default PokemonCardStyles;
