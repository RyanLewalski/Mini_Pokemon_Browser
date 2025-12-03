const AppStyles = {
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
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1.5rem",
    width: "100%",
  },
  search: {
    flex: 1,
    padding: "0.75rem",
    fontSize: "1rem",
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

export default AppStyles;
