export default function LoveTimeline() {
  const timeline = [
    { day: "Day 1", text: "When love quietly began." },
    { day: "Day 45", text: "Your presence started feeling safe." },
    { day: "Day 120", text: "I realized you were my calm." },
    { day: "Day 240", text: "Love stopped being exciting — it became peaceful." },
    { day: "Day 365", text: "I still choose you. Every day." },
  ];

  return (
    <div style={{ marginTop: 80 }}>
      <h2 style={{ color: "#9d174d", fontSize: "2.2rem", marginBottom: 40 }}>
        Our Journey 🌷
      </h2>

      {timeline.map((item, i) => (
        <div
          key={i}
          className="reveal"
          style={{
            marginBottom: 30,
            padding: 20,
            borderLeft: "3px solid #ec4899",
            maxWidth: 500,
            margin: "20px auto",
            textAlign: "left",
          }}
        >
          <strong style={{ color: "#be185d" }}>{item.day}</strong>
          <p style={{ marginTop: 6, color: "#444" }}>{item.text}</p>
        </div>
      ))}
    </div>
  );
}