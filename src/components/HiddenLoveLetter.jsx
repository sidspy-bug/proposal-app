import { useState } from "react";

export default function HiddenLoveLetter({ audioRef }) {
  const [open, setOpen] = useState(false);

  const openLetter = () => {
    // 🔉 Lower music volume smoothly
    if (audioRef?.current) {
      audioRef.current.volume = 0.2;
    }
    setOpen(true);
  };

  const closeLetter = () => {
    // 🔊 Restore music volume
    if (audioRef?.current) {
      audioRef.current.volume = 0.6;
    }
    setOpen(false);
  };

  return (
    <>
      {/* 💌 Big Secret Button */}
      <div style={{ textAlign: "center", margin: "140px 0" }}>
        <span
          className="love-letter-btn"
          title="A letter written only for you 💖"
          onClick={openLetter}
        >
          💌
        </span>
        <div
          style={{
            marginTop: 10,
            fontSize: "0.9rem",
            color: "#777",
            fontStyle: "italic",
          }}
        >
          Tap gently
        </div>
      </div>

      {/* 🌙 Darkened Background + Love Letter */}
      {open && (
        <div
          onClick={closeLetter}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",   // 🌙 DARKER OVERLAY
            backdropFilter: "blur(4px)",     // ✨ SOFT BLUR
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            animation: "fadeIn 0.6s ease",
          }}
        >
          {/* 💌 Letter Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              padding: "42px 34px",
              borderRadius: 26,
              maxWidth: 540,
              width: "92%",
              boxShadow: "0 40px 80px rgba(0,0,0,0.45)",
              animation: "slideUp 0.6s ease",
            }}
          >
            {/* Title */}
            <h2
              style={{
                color: "#be185d",
                marginBottom: 20,
                fontSize: "1.7rem",
                textAlign: "center",
              }}
            >
              A Letter I Carry in My Heart ❤️
            </h2>

            {/* Letter Content */}
            <p
              style={{
                color: "#444",
                lineHeight: 1.8,
                fontSize: "1.05rem",
              }}
            >
              In these 365 days, you became more than love.
              <br /><br />
              You became my patience on difficult days,
              my calm when everything felt noisy,
              and my strength when I doubted myself.
              <br /><br />
              I don’t just love you for who you are,
              but for how I become when I’m with you.
              <br /><br />
              If forever is real,
              I hope it always looks like us.
            </p>

            {/* Close Button */}
            <div style={{ textAlign: "right", marginTop: 32 }}>
              <button
                onClick={closeLetter}
                style={{
                  padding: "10px 24px",
                  borderRadius: 26,
                  border: "none",
                  background: "#ec4899",
                  color: "white",
                  fontSize: "0.95rem",
                  cursor: "pointer",
                }}
              >
                Close ❤️
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}