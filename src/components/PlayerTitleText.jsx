import { motion } from "framer-motion";
import { animationConfig } from "../constants/animationConfig";

export const PlayerTitleText = ({ player, onHover, onHoverEnd }) => {
  const handleActivate = () => onHover(player.id);

  return (
    <motion.span
      role="button"
      tabIndex={0}
      className="transition-colors duration-300 hover:text-zinc-500 focus-visible:text-zinc-500 focus-visible:outline-none"
      animate={animationConfig.initial}
      whileHover={animationConfig.hover}
      whileFocus={animationConfig.hover}
      transition={animationConfig.transition}
      onMouseEnter={handleActivate}
      onMouseMove={handleActivate}
      onMouseLeave={onHoverEnd}
      onFocus={handleActivate}
      onBlur={onHoverEnd}
    >
      {player.title}
    </motion.span>
  );
};