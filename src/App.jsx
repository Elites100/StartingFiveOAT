import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PlayerPreview } from "./components/PlayerPreview";
import { PlayerTitleList } from "./components/PlayerTitleList";
import { useMobileWarning } from "./hooks/useMobileWarning";
import { useMousePosition } from "./hooks/useMousePosition";
import { players } from "./constants/players";
import { playerScenes } from "./data/playerScenes";
import { Toaster } from "sonner";

function App() {
  const [hoveredPlayerId, setHoveredPlayerId] = useState(null);
  const mousePosition = useMousePosition();
  useMobileWarning();

  const clearHover = useCallback(() => setHoveredPlayerId(null), []);
  const activePlayer = players.find((player) => player.id === hoveredPlayerId);
  const scenes = hoveredPlayerId ? playerScenes[hoveredPlayerId] ?? [] : [];

  return (
    <main className="relative flex w-screen flex-col items-center justify-center">
      <h1 className="sr-only">Starting Five Of All Time</h1>
      <Toaster />
      <PlayerTitleList
        players={players}
        onHover={setHoveredPlayerId}
        onHoverEnd={clearHover}
      />

      <span className="sr-only" aria-live="polite">
        {hoveredPlayerId ? `Showing scenes from ${activePlayer?.title}` : ""}
      </span>

      <AnimatePresence>
        {scenes.map((item, index) => (
          <PlayerPreview
            key={item.src}
            altText={activePlayer?.title ?? ""}
            item={item}
            index={index}
            mousePosition={mousePosition}
          />
        ))}
      </AnimatePresence>
    </main>
  );
}

export default App;
