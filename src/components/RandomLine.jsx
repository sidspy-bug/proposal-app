import { useState } from "react";

const loveLines = [
  "You don’t love loudly, you love deeply — and that’s what makes it forever.",
  "Your calm fixes what the world breaks in me.",
  "You stayed, even on days I was hard to love.",
  "365 days later, my heart still feels safe with you.",
  "You don’t complete me — you walk with me."
];

export default function RandomLine() {
  const [line, setLine] = useState(
    loveLines[Math.floor(Math.random() * loveLines.length)]
  );

  return (
    <div className="slide-up" style={{ marginTop: 40 }}>
      <p
        style={{
          fontSize: "1.1rem",
          fontStyle: "italic",
          color: "#444",
          maxWidth: 500,
          margin: "0 auto",
        }}
      >
        “{line}”
      </p>

      <button
        onClick={() =>
          setLine(loveLines[Math.floor(Math.random() * loveLines.length)])
        }
        style={{
          marginTop: 15,
          background: "none",
          border: "none",
          color: "#ec4899",
          cursor: "pointer",
        }}
      >
        Read another 🌸
      </button>
    </div>
  );
}