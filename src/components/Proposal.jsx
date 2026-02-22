import { useState } from "react";

export default function Proposal() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div
      className="fade-in"
      style={{
        height: "100vh",
        background: "linear-gradient(to bottom right, #fbcfe8, #e9d5ff)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 20,
      }}
    >
      {!accepted ? (
        <>
          <h1
            className="slide-up"
            style={{ fontSize: "2.2rem", color: "#9d174d" }}
          >
            You were never just a part of my life…
            <br />
            you became my strength, my peace ❤️
          </h1>

          <p
            className="slide-up"
            style={{
              fontSize: "1.1rem",
              marginTop: 25,
              color: "#333",
              maxWidth: 420,
              lineHeight: 1.7,
            }}
          >
            Will you continue this journey with me —
            not just today, but for every tomorrow?
          </p>

          <button
            onClick={() => setAccepted(true)}
            style={{
              marginTop: 35,
              padding: "14px 36px",
              fontSize: "1.1rem",
              borderRadius: 30,
              border: "none",
              background: "#22c55e",
              color: "white",
              cursor: "pointer",
              boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
            }}
          >
            Always 💍
          </button>
        </>
      ) : (
        <h1
          className="slide-up"
          style={{ fontSize: "2.2rem", color: "#9d174d" }}
        >
          I choose you.
          <br />
          In every lifetime, in every version of me ❤️
        </h1>
      )}
    </div>
  );
}