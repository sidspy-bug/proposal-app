export default function DaysInLove() {
  const startDate = new Date("2025-02-24"); // CHANGE to your date
  const today = new Date();
  const days = Math.floor(
    (today - startDate) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="fade-in" style={{ marginTop: 60 }}>
      <h2 style={{ color: "#9d174d", fontSize: "2rem" }}>
        {days} Days of Us ❤️
      </h2>
      <p style={{ marginTop: 10, color: "#555" }}>
        And every day, I’d still choose you.
      </p>
    </div>
  );
}