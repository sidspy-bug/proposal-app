import { useEffect, useState } from "react";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generatedHearts = Array.from({ length: 25 }).map(() => ({
      left: Math.random() * 100,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 10,
      size: 12 + Math.random() * 18,
    }));

    setHearts(generatedHearts);
  }, []);

  return (
    <>
      {hearts.map((heart, index) => (
        <div
          key={index}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </div>
      ))}
    </>
  );
}