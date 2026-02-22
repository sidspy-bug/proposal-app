import { useRef, useState } from "react";

import Landing from "./components/Landing";
import Memories from "./components/Memories";
import RandomLine from "./components/RandomLine";
import DaysInLove from "./components/DaysInLove";
import LoveTimeline from "./components/LoveTimeline";
import Proposal from "./components/Proposal";
import FloatingHearts from "./components/FloatingHearts";
import HiddenLoveLetter from "./components/HiddenLoveLetter";

function App() {
  // 🎵 Music reference
  const audioRef = useRef(null);

  // 🚪 Landing screen control
  const [started, setStarted] = useState(false);

  // ▶️ Start experience (user click)
  const startExperience = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.muted = false;
      audio.volume = 0.6;      // normal volume
      audio.currentTime = 0;

      // browser-safe play
      audio.play().catch(() => {});
    }

    setStarted(true);
  };

  return (
    <>
      {/* 🎵 Background Music */}
      <audio ref={audioRef} loop preload="auto">
  <source src="music.mp3" type="audio/mp3" />
</audio>

      {/* 🚪 First Screen */}
      {!started ? (
        <Landing start={startExperience} />
      ) : (
        <>
          {/* 💕 Floating Hearts Background */}
          <FloatingHearts />

          {/* 📸 Memories Page */}
          <Memories />

          {/* ✨ Random Heart-touching Lines */}
          <RandomLine />

          {/* 📅 365 Days in Love */}
          <DaysInLove />

          {/* 🕰️ Love Timeline */}
          <LoveTimeline />

          {/* 💍 Promise / Proposal */}
          <Proposal />

          {/* 💌 Hidden Love Letter (music volume lowers here) */}
          <HiddenLoveLetter audioRef={audioRef} />
        </>
      )}
    </>
  );
}

export default App;