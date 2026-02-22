import { useEffect } from "react";

export default function Memories() {

  // 🔹 Scroll reveal logic
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const onScroll = () => {
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const photos = [
    {
      img: "/her1.jpeg",
      text: "You didn’t just stand by me — you understood me."
    },
    {
      img: "/her2.jpeg",
      text: "Your love feels calm, steady, and safe — like home."
    }
  ];

  return (
    <div
      style={{
        padding: "90px 20px",
        background: "linear-gradient(to bottom, #fff, #fdf2f8)",
        textAlign: "center",
      }}
    >
      {/* 💖 Glowing Name */}
      <h1 className="glow-name reveal">
        For <span>sweetheart</span> ❤️
      </h1>

      {/* 🌷 Heading */}
      <h2
        className="reveal"
        style={{
          fontSize: "2.4rem",
          color: "#9d174d",
          marginTop: 30,
          marginBottom: 60,
        }}
      >
        What You Mean To Me
      </h2>

      {/* 📸 Memory Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 50,
          flexWrap: "wrap",
        }}
      >
        {photos.map((p, i) => (
          <div
            key={i}
            className="reveal fancy-card"
            style={{
              width: 300,
              background: "#fff",
              borderRadius: 28,
              padding: 18,
            }}
          >
            <div
              style={{
                width: "100%",
                height: 380,
                overflow: "hidden",
                borderRadius: 22,
              }}
            >
              <img
                src={p.img}
                alt="memory"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <p
              style={{
                marginTop: 22,
                fontSize: "1.05rem",
                color: "#444",
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              “{p.text}”
            </p>
          </div>
        ))}
      </div>

      {/* ♥ Divider */}
      <div
        className="reveal"
        style={{
          marginTop: 80,
          fontSize: "1.4rem",
          color: "#ec4899",
        }}
      >
        ♥
      </div>
    </div>
  );
}
