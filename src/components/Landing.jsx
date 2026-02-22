export default function Landing({ start }) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom right, #fbcfe8, #e9d5ff)",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#9d174d" }}>
        This is not a proposal…
        <br />
        it’s a thank you ❤️
      </h1>

      <button
        onClick={start}
        style={{
          marginTop: 25,
          padding: "12px 28px",
          fontSize: "1rem",
          borderRadius: 30,
          border: "none",
          background: "#ec4899",
          color: "white",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        Tap to Continue 🌸
      </button>
    </div>
  );
}