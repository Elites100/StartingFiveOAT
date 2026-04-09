import { PlayerTitleText } from "./PlayerTitleText";

export const PlayerTitleList = ({ players, onHover, onHoverEnd }) => (
  <div className="flex flex-col items-center justify-center gap-4 text-nowrap text-5xl font-black uppercase text-zinc-300 *:cursor-default md:text-7xl">
    {players.map((player) => (
      <PlayerTitleText
        key={player.id}
        player={player}
        onHover={onHover}
        onHoverEnd={onHoverEnd}
      />
    ))}
  </div>
);
