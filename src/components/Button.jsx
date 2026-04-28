const Button = ({ color = "#d71111", texto = "Clique aqui" }) => {
  return (
    <button
      style={{
        backgroundColor: color,
        color: "#fff",
        padding: "10px 24px",
        borderRadius: "8px",
        border: "none",
        fontSize: "14px",
        fontWeight: "600",
        cursor: "pointer",
      }}
    >
      {texto}
    </button>
  )
}

export default Button