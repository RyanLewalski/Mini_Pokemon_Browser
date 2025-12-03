const PokemonDetailStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#fff",
    borderRadius: "12px",
    padding: "2rem",
    maxWidth: "400px",
    width: "90%",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  },
  title: { textTransform: "capitalize", textAlign: "center", marginBottom: "1rem" },
  image: { display: "block", margin: "0 auto 1rem", width: "150px", height: "150px" },
  closeButton: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    border: "none",
    background: "#333",
    color: "#fff",
    cursor: "pointer",
  },
};

export default PokemonDetailStyles;
